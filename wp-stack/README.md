# Stack WordPress locale (Docker)

## 1) Preparer
- Copier `.env.example` en `.env` puis ajuster si besoin.
- Optionnel: placer le zip du theme parent dans `wp-stack/lavilla.zip`.

## 2) Lancer installation auto
```powershell
cd wp-stack
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Si tu as le zip parent Lavilla:
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1 -InstallLavilla
```

## 3) Acces
- Front: `http://localhost:8080`
- Admin: `http://localhost:8080/wp-admin`

## 4) Notes
- Le child theme `lavilla-child-berck` est monte automatiquement.
- Si Lavilla est installe, le child est active automatiquement.