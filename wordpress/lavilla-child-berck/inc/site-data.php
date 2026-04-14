<?php
/**
 * Donnees mockees pour les sections du site.
 *
 * @package lavilla-child-berck
 */

if (!defined('ABSPATH')) {
    exit;
}

function berck_site_data(): array
{
    return [
        'apartments' => [
            [
                'id' => 'vedette',
                'name' => 'Residence La Vedette',
                'subtitle' => '2 pieces - 50m de la plage - 4 couchages',
                'distance' => '50m',
                'size' => '40m2',
                'rooms' => '1 chambre + salon',
                'floor' => '1er etage',
                'elevator' => 'Ascenseur',
                'internet' => 'Boitier 5G / TV',
                'balcony' => '1 balcon loggia',
                'price_week' => '550 EUR',
                'night_price' => '110 EUR / nuit (min. 2 nuits)',
                'badge' => 'Meilleur rapport qualite/prix',
                'image' => 'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/06bcca77-9710-4ddb-b06f-a83f75270f55/photo-La-Vedette.jpg',
                'gallery' => [
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/ba635678-0145-470f-9041-39dbabbe2aac/plan-de-situation-vers-la-mer.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/c983a723-8a07-47b1-95ba-fab58bd0bedb/sdb-v3.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/938d4838-3dd9-43af-8d3b-292861659de0/rue-lavoisier-vers-mer.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/8408faca-557a-4a6c-84d6-066d5216c29a/batiment-.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/c0ac95d0-e814-4df5-9c7f-b60bc4bc18db/DERNIERE-VERSION-SALON.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/79685ec3-ecdf-4224-8248-3d9ce828eaf8/Balcon-.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/8fc8f900-1ed2-4352-8ea8-3418b9169e42/la-chambre.jpg',
                    'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/b9a8670a-cc1e-49cc-98e1-2ee6f39737e8/CHAMBRE.jpg',
                ],
                'address' => '62 rue du Calvaire, 62600 Berck-sur-Mer',
            ],
            [
                'id' => 'odyssee',
                'name' => 'Residence l\'Odyssee',
                'subtitle' => '3 pieces - 350m de la mer - 4 couchages',
                'distance' => '350m',
                'size' => '80m2',
                'rooms' => '2 chambres',
                'floor' => '2e etage',
                'elevator' => 'Sans ascenseur',
                'internet' => 'Fibre + TV',
                'balcony' => '2 balcons (1 privatif)',
                'price_week' => '700 EUR',
                'night_price' => '110 EUR / nuit (min. 2 nuits, hors juil/aout)',
                'image' => 'https://vz-c145b333-ce0.b-cdn.net/b8185116-5c9e-4da2-88bc-c6d801666f90/thumbnail.jpg',
                'gallery' => [
                    'https://vz-c145b333-ce0.b-cdn.net/3fb6fb64-9523-4527-98ec-73aaf1b42471/thumbnail.jpg',
                ],
                'address' => '29 avenue du Docteur Quettier, 62600 Berck-sur-Mer',
            ],
        ],
        'unavailable_dates' => [
            '2026-04-18',
            '2026-04-19',
            '2026-04-24',
            '2026-05-02',
            '2026-05-03',
            '2026-05-08',
            '2026-05-09',
            '2026-05-15',
        ],
        'testimonials' => [
            [
                'name' => 'Claire',
                'text' => 'Appartement tres propre, proche de la plage et reservation super fluide.',
                'rating' => 5,
            ],
            [
                'name' => 'Julien',
                'text' => 'Parfait pour un sejour en famille, balcon tres agreable en fin de journee.',
                'rating' => 5,
            ],
            [
                'name' => 'Nadia',
                'text' => 'Communication rapide avec le proprietaire, tout etait conforme.',
                'rating' => 4,
            ],
        ],
    ];
}