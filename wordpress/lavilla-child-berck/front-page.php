<?php
/**
 * Front page template for Berck reservation.
 *
 * @package lavilla-child-berck
 */

if (!defined('ABSPATH')) {
    exit;
}

$data = berck_site_data();
$owner = berck_get_owner_contact();
$apartments = $data['apartments'];
$testimonials = $data['testimonials'];
$unavailable_dates = $data['unavailable_dates'];
$gallery = [];

foreach ($apartments as $apartment) {
    $gallery = array_merge($gallery, $apartment['gallery']);
}

get_header();
?>
<main id="primary" class="berck-site">
    <section class="berck-hero" id="top">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" alt="Plage Berck-sur-Mer" loading="lazy" />
        <div class="berck-overlay"></div>
        <div class="berck-hero-content container">
            <p class="berck-chip">Berck-sur-Mer • Location saisonniere</p>
            <h1>Sejournez a Berck-sur-Mer a 50m de la plage</h1>
            <p>2 appartements tout confort pour 4 personnes, reservation rapide.</p>
            <div class="berck-actions">
                <a href="#disponibilites" class="berck-btn berck-btn-light">Voir les disponibilites</a>
                <a href="#reservation" class="berck-btn berck-btn-outline">Reserver maintenant</a>
            </div>
        </div>
    </section>

    <section class="berck-section" id="appartements">
        <div class="container">
            <header class="berck-section-head">
                <p class="berck-eyebrow">Comparer & reserver</p>
                <h2>Deux residences, une section simple</h2>
                <p>Comparez en un coup d'oeil puis passez a la reservation.</p>
            </header>
            <div class="berck-cards">
                <?php foreach ($apartments as $apt) : ?>
                    <article class="berck-card">
                        <img src="<?php echo esc_url($apt['image']); ?>" alt="<?php echo esc_attr($apt['name']); ?>" loading="lazy" />
                        <div class="berck-card-body">
                            <div class="berck-tags">
                                <span><?php echo esc_html($apt['distance']); ?> plage</span>
                                <span>4 personnes</span>
                                <?php if (!empty($apt['badge'])) : ?>
                                    <span><?php echo esc_html($apt['badge']); ?></span>
                                <?php endif; ?>
                            </div>
                            <h3><?php echo esc_html($apt['name']); ?></h3>
                            <p><?php echo esc_html($apt['subtitle']); ?></p>
                            <dl class="berck-details">
                                <div><dt>Surface</dt><dd><?php echo esc_html($apt['size']); ?></dd></div>
                                <div><dt>Pieces</dt><dd><?php echo esc_html($apt['rooms']); ?></dd></div>
                                <div><dt>Etage</dt><dd><?php echo esc_html($apt['floor']); ?></dd></div>
                                <div><dt>Acces</dt><dd><?php echo esc_html($apt['elevator']); ?></dd></div>
                                <div><dt>Internet</dt><dd><?php echo esc_html($apt['internet']); ?></dd></div>
                                <div><dt>Balcon</dt><dd><?php echo esc_html($apt['balcony']); ?></dd></div>
                            </dl>
                            <p class="berck-price">A partir de <strong><?php echo esc_html($apt['price_week']); ?></strong> / semaine</p>
                            <a class="berck-btn berck-btn-dark" href="#reservation">Voir details</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="berck-section" id="galerie">
        <div class="container">
            <header class="berck-section-head">
                <p class="berck-eyebrow">Galerie</p>
                <h2>Photos des appartements</h2>
            </header>
            <div class="berck-slider" data-berck-slider>
                <?php foreach ($gallery as $index => $image) : ?>
                    <img class="berck-slide <?php echo $index === 0 ? 'is-active' : ''; ?>" src="<?php echo esc_url($image); ?>" alt="Photo appartement" loading="lazy" />
                <?php endforeach; ?>
                <button type="button" class="berck-nav prev" data-berck-prev aria-label="Image precedente">‹</button>
                <button type="button" class="berck-nav next" data-berck-next aria-label="Image suivante">›</button>
            </div>
        </div>
    </section>

    <section class="berck-section berck-dark" id="prix">
        <div class="container">
            <header class="berck-section-head">
                <p class="berck-eyebrow">Tarifs</p>
                <h2>Prix transparents</h2>
            </header>
            <div class="berck-pricing-grid">
                <?php foreach ($apartments as $apt) : ?>
                    <article class="berck-pricing-card">
                        <h3><?php echo esc_html($apt['name']); ?></h3>
                        <p><?php echo esc_html($apt['night_price']); ?></p>
                        <p class="berck-discount">-10% des 2 semaines sur certaines periodes</p>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="berck-section" id="disponibilites">
        <div class="container">
            <header class="berck-section-head">
                <p class="berck-eyebrow">Disponibilites</p>
                <h2>Dates deja reservees</h2>
                <p>Planning simplifie, a synchroniser ensuite avec HBook.</p>
            </header>
            <div class="berck-unavailable-list">
                <?php foreach ($unavailable_dates as $date) : ?>
                    <span><?php echo esc_html($date); ?></span>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="berck-section" id="avis">
        <div class="container">
            <header class="berck-section-head">
                <p class="berck-eyebrow">Avis</p>
                <h2>Ils ont aime leur sejour</h2>
            </header>
            <div class="berck-reviews">
                <?php foreach ($testimonials as $review) : ?>
                    <article class="berck-review">
                        <p class="berck-stars"><?php echo str_repeat('★', (int) $review['rating']); ?></p>
                        <p>"<?php echo esc_html($review['text']); ?>"</p>
                        <strong><?php echo esc_html($review['name']); ?></strong>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="berck-section" id="localisation">
        <div class="container berck-location-grid">
            <div>
                <header class="berck-section-head berck-left">
                    <p class="berck-eyebrow">Localisation</p>
                    <h2>Berck-sur-Mer, tout a pied</h2>
                </header>
                <?php foreach ($apartments as $apt) : ?>
                    <div class="berck-location-card">
                        <h3><?php echo esc_html($apt['name']); ?></h3>
                        <p><?php echo esc_html($apt['address']); ?></p>
                        <p><strong>Distance plage:</strong> <?php echo esc_html($apt['distance']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            <iframe title="Carte Berck-sur-Mer" src="https://www.openstreetmap.org/export/embed.html?bbox=1.5525%2C50.4015%2C1.5925%2C50.4165&layer=mapnik" loading="lazy"></iframe>
        </div>
    </section>

    <section class="berck-section berck-sand" id="reservation">
        <div class="container berck-booking-grid">
            <div>
                <header class="berck-section-head berck-left">
                    <p class="berck-eyebrow">Reservation</p>
                    <h2>Reservez en moins de 2 minutes</h2>
                    <p>Paiement 50% a la reservation. Attestation d'assurance villégiature demandee.</p>
                </header>
                <div class="berck-contact-box">
                    <p><strong>Proprietaire:</strong> <?php echo esc_html($owner['name']); ?></p>
                    <p><strong>Telephone:</strong> <?php echo esc_html($owner['phone']); ?></p>
                    <p><strong>Email:</strong> <a href="mailto:<?php echo esc_attr($owner['email']); ?>"><?php echo esc_html($owner['email']); ?></a></p>
                    <a class="berck-btn berck-whatsapp" href="https://wa.me/33629891114" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
                </div>
            </div>
            <div class="berck-form-wrap">
                <?php if (shortcode_exists('hbook')) : ?>
                    <?php echo do_shortcode('[hbook]'); ?>
                <?php elseif (shortcode_exists('contact-form-7')) : ?>
                    <?php echo do_shortcode('[contact-form-7 id="replace-with-id" title="Reservation"]'); ?>
                <?php else : ?>
                    <form class="berck-fallback-form" method="post" action="#">
                        <label>Nom<input type="text" name="name" required></label>
                        <label>Email<input type="email" name="email" required></label>
                        <label>Telephone<input type="text" name="phone" required></label>
                        <label>Arrivee<input type="date" name="checkin" required></label>
                        <label>Depart<input type="date" name="checkout" required></label>
                        <button type="submit" class="berck-btn berck-btn-dark">Reserver</button>
                    </form>
                <?php endif; ?>
            </div>
        </div>
    </section>
</main>
<?php
get_footer();
