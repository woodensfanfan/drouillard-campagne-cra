# Site de campagne — Marc-Arthur Drouillard

Site vitrine React (Create React App) + JavaScript + Tailwind CSS + Framer Motion + Lucide.

## Démarrage

```bash
npm install
npm start          # http://localhost:3000
npm run build      # build de production dans /build
```

Le projet suit la structure générée par `npx create-react-app`. Les imports sont absolus depuis `src`
(`import { site } from 'data/site'`) grâce à `jsconfig.json`.

## Architecture

```
src/
├── components/
│   ├── ui/         Button, RoadmapButton, Section/Container, Reveal, FormField, SampleTag, CandidatePortrait
│   ├── layout/     Header (navbar + menu mobile), Footer
│   └── sections/   Hero, Vision, Biography, Program, News, Events, Join
├── data/           site.js, biography.js, program.js, news.js, locations.js
├── hooks/          useMobileMenu, useJoinForm
├── lib/            validation.js, format.js
├── services/       membership.js (envoi du formulaire)
└── types/          index.js (typedefs JSDoc)
```

Aucun texte n'est codé en dur dans les sections : tout le contenu vit dans `src/data`.

## Avant la mise en ligne

Le site démarre en mode maquette (`site.contentValidated = false` dans `src/data/site.js`) :
un bandeau l'indique et chaque contenu de démonstration porte une étiquette « Exemple ».

| À faire | Fichier |
| --- | --- |
| Slogan officiel, signification du sigle MRN, éditeur responsable, e-mail | `src/data/site.js` |
| Portrait officiel (WebP/AVIF ~960×1200, < 150 Ko) dans `public/images/` | `site.portrait.src` |
| PDF dans `public/documents/feuille-de-route.pdf`, puis `roadmap.available = true` | `src/data/site.js` |
| Chiffres réels (départements visités, citoyens consultés) | `metrics` dans `src/data/site.js` |
| Relecture de la biographie par le candidat (entrées `toConfirm`) | `src/data/biography.js` |
| Programme officiel à la place des projets d'exemple | `src/data/program.js` |
| Vrais communiqués et agenda | `src/data/news.js` |
| Liens des réseaux officiels | `socialLinks` dans `src/data/site.js` |
| Point d'entrée du formulaire : `REACT_APP_MEMBERSHIP_ENDPOINT` dans `.env` | `src/services/membership.js` |
| Passer `contentValidated` à `true` et retirer `noindex` | `src/data/site.js`, `public/index.html` |

Sans `REACT_APP_MEMBERSHIP_ENDPOINT`, le formulaire simule l'envoi et **ne transmet rien**.

## Sources de la biographie

- Fiche de campagne 2016 : https://lakayexpo.com/marcarthurdrouillard/
- Candidats agréés 2015 : https://www.haitilibre.com/article-14185-haiti-flash-liste-officielle-des-candidats-agrees-a-la-presidence.html
- Candidats confirmés 2016 : https://www.haitilibre.com/article-17809-haiti-elections-presidentielle-16-candidats-confirmes-a-date-liste.html
- Candidats inscrits 2026 : https://www.haitilibre.com/article-48851-haiti-actualite-zapping.html

## Accessibilité et performance

- Structure sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`), lien d'évitement, focus visible.
- Contrastes AA documentés dans `tailwind.config.js`.
- Frise au clavier (flèches, Début, Fin), filtres `aria-pressed`, erreurs de formulaire reliées par `aria-describedby`.
- `prefers-reduced-motion` respecté (CSS + `MotionConfig`).
- Polices système (aucune requête), sections basses en `React.lazy`, portrait prioritaire avec dimensions fixes.
