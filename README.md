# Site de reservation moderne - Berck-sur-Mer

Frontend de reservation sans backend pour 2 appartements a Berck-sur-Mer:
- Residence La Vedette (50m plage)
- Residence l'Odyssee (350m plage)

## Stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Lancer le projet
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
npm run preview
```

## Sections implementees
- Hero conversion avec CTA principal et secondaire
- Comparaison des 2 appartements
- Cards appartement avec badges/equipements
- Galerie photo avec carousel
- Tarifs semaine + nuit
- Calendrier disponibilites (mock)
- Avis clients
- Localisation + carte
- Formulaire reservation (frontend uniquement)
- Bouton WhatsApp + footer contact
- Header sticky + menu mobile + CTA flottant

## Donnees mockees
Les donnees sont centralisees ici:
- `src/data/siteData.ts`

## Remarque
Le formulaire est volontairement sans backend pour cette version. L'envoi de contrat est simule cote frontend.# locationberck
