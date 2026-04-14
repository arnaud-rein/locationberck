param(
  [switch]$InstallLavilla
)

$ErrorActionPreference = "Stop"

function Get-EnvValue {
  param(
    [string]$Path,
    [string]$Key
  )

  $line = Get-Content $Path | Where-Object { $_ -match "^$Key=" } | Select-Object -First 1
  if (-not $line) {
    throw "Cle introuvable dans .env: $Key"
  }

  return ($line -split "=", 2)[1]
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$stackDir = Split-Path -Parent $scriptDir
Set-Location $stackDir

if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Fichier .env cree depuis .env.example"
}

$wpUrl = Get-EnvValue -Path ".env" -Key "WP_URL"
$wpTitle = Get-EnvValue -Path ".env" -Key "WP_TITLE"
$wpAdminUser = Get-EnvValue -Path ".env" -Key "WP_ADMIN_USER"
$wpAdminPassword = Get-EnvValue -Path ".env" -Key "WP_ADMIN_PASSWORD"
$wpAdminEmail = Get-EnvValue -Path ".env" -Key "WP_ADMIN_EMAIL"

docker compose up -d db wordpress
Write-Host "Conteneurs db et wordpress demarres"

Start-Sleep -Seconds 15

if ($InstallLavilla) {
  if (Test-Path "lavilla.zip") {
    $zipPath = (Resolve-Path "lavilla.zip").Path.Replace("\", "/")
    docker compose run --rm -v "${zipPath}:/tmp/lavilla.zip" wpcli sh -lc "wp theme install /tmp/lavilla.zip --path=/var/www/html --activate --allow-root"
    Write-Host "Lavilla installe depuis lavilla.zip"
  } else {
    Write-Host "lavilla.zip introuvable dans wp-stack. Installation sans parent Lavilla." -ForegroundColor Yellow
  }
}

docker compose run --rm `
  -e WP_URL=$wpUrl `
  -e WP_TITLE=$wpTitle `
  -e WP_ADMIN_USER=$wpAdminUser `
  -e WP_ADMIN_PASSWORD=$wpAdminPassword `
  -e WP_ADMIN_EMAIL=$wpAdminEmail `
  wpcli sh /scripts/setup-wordpress.sh

if ($InstallLavilla -and (Test-Path "lavilla.zip")) {
  docker compose run --rm wpcli sh -lc "wp theme activate lavilla-child-berck --path=/var/www/html --allow-root"
}

Write-Host "Installation terminee"
Write-Host "Site: $wpUrl"
Write-Host "Admin: $wpUrl/wp-admin"
Write-Host "Utilisateur: $wpAdminUser"
Write-Host "Mot de passe: $wpAdminPassword"