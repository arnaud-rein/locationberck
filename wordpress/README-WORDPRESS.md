# Conversion WordPress (PHP) - Berck Booking

Ce dossier contient un **child theme WordPress** pour reproduire le site de reservation en PHP, base sur le theme parent **Lavilla** de Maestrel.

## Important
Le theme parent Lavilla est proprietaire, donc il faut d'abord l'installer via ton achat:
- http://maestrel.com/fr/lavilla/

Le child theme est ici:
- `wordpress/lavilla-child-berck`

## 1) Prerequis WordPress
- WordPress 6.4+
- PHP 8.1+
- Theme parent Lavilla installe
- Plugin HBook (inclus avec Lavilla) recommande pour la reservation en ligne

## 2) Installation du child theme
1. Copier le dossier `wordpress/lavilla-child-berck` dans `wp-content/themes/`.
2. Verifier le nom du dossier du theme parent.
   - Le header `Template:` du child est `lavilla`.
   - Si ton dossier parent a un autre nom, modifier `Template:` dans `style.css`.
3. Activer `Lavilla Child Berck` dans Apparence > Themes.

## 3) Configuration homepage
1. Creer une page "Accueil".
2. Reglages > Lecture > "Une page statique".
3. Choisir "Accueil" comme page d'accueil.
4. Le template `front-page.php` du child prendra la main.

## 4) Reservation
- Si HBook est actif, le shortcode `[hbook]` est injecte automatiquement dans la section reservation.
- Sinon, un formulaire fallback HTML apparait.

## 5) Personnalisation contact
Dans Apparence > Personnaliser > "Berck Contact":
- Nom proprietaire
- Telephone
- Email

## 6) Fichiers principaux
- `style.css` (entete du theme enfant)
- `functions.php` (enqueue + customizer + donnees)
- `front-page.php` (homepage complete)
- `inc/site-data.php` (donnees appartements, prix, images)
- `assets/css/berck.css` (styles)
- `assets/js/berck.js` (slider galerie)

## 7) Mise en production
- Verifier permaliens: Reglages > Permaliens > "Nom de l'article".
- Installer plugin cache (ex: WP Rocket, LiteSpeed Cache).
- Installer plugin SEO (RankMath/Yoast).
- Activer HTTPS.

## 8) Packaging (optionnel)
Pour zipper le child theme:
```powershell
Compress-Archive -Path .\wordpress\lavilla-child-berck\* -DestinationPath .\lavilla-child-berck.zip -Force
```