#!/bin/sh
set -e

if ! wp core is-installed --path=/var/www/html --allow-root >/dev/null 2>&1; then
  wp core install \
    --path=/var/www/html \
    --url="$WP_URL" \
    --title="$WP_TITLE" \
    --admin_user="$WP_ADMIN_USER" \
    --admin_password="$WP_ADMIN_PASSWORD" \
    --admin_email="$WP_ADMIN_EMAIL" \
    --skip-email \
    --allow-root
fi

wp option update blogdescription "2 appartements tout confort pour 4 personnes" --path=/var/www/html --allow-root
wp rewrite structure '/%postname%/' --path=/var/www/html --allow-root
wp rewrite flush --path=/var/www/html --allow-root

HOME_ID=$(wp post create --post_type=page --post_title='Accueil' --post_status=publish --porcelain --path=/var/www/html --allow-root)
wp option update show_on_front 'page' --path=/var/www/html --allow-root
wp option update page_on_front "$HOME_ID" --path=/var/www/html --allow-root

if wp theme is-installed lavilla --path=/var/www/html --allow-root; then
  wp theme activate lavilla-child-berck --path=/var/www/html --allow-root
  echo "Theme actif: lavilla-child-berck"
else
  wp theme activate twentytwentyfour --path=/var/www/html --allow-root
  echo "Theme parent Lavilla absent: fallback temporaire sur Twenty Twenty-Four."
fi

echo "WordPress configure."