import { Handshake, Landmark, Scale } from 'lucide-react';

/**
 * Présentation courte. Les éléments factuels proviennent de sources publiques
 * (fiche de campagne 2016, listes du CEP relayées par HaïtiLibre) et doivent
 * être relus par le candidat avant publication.
 */
export const biographyIntro = [
  "Né à Port-au-Prince, Marc-Arthur Drouillard est communicateur social et journaliste. Il s'est fait connaître du public par la radio, avant de s'engager dans la vie associative et sportive, puis dans la vie politique nationale.",
  "Marié et père de quatre enfants, il se présente à l'élection présidentielle avec une conviction : l'État haïtien doit redevenir présent, lisible et au service de chaque citoyen, sur tout le territoire.",
];

/** @type {import('types').ValueItem[]} */
export const leadershipValues = [
  {
    id: 'integrite',
    title: 'Intégrité',
    description: 'Rendre des comptes, publier les engagements et accepter le contrôle citoyen.',
    icon: Scale,
  },
  {
    id: 'republique',
    title: 'Engagement républicain',
    description: 'Des institutions qui fonctionnent, dans le respect de la Constitution et du suffrage.',
    icon: Landmark,
  },
  {
    id: 'proximite',
    title: 'Proximité',
    description: "Écouter d'abord : les sections communales, les quartiers et la diaspora.",
    icon: Handshake,
  },
];

/** @type {import('types').TimelineEntry[]} */
export const timeline = [
  {
    id: 'naissance',
    period: '1972',
    title: 'Naissance à Port-au-Prince',
    description: 'Marc-Arthur Drouillard naît le 11 février 1972 dans la capitale.',
    source: 'Fiche de campagne 2016 (lakayexpo.com)',
    toConfirm: true,
  },
  {
    id: 'formation',
    period: 'Formation',
    title: 'Études à Port-au-Prince',
    description: 'Scolarité au Collège Roger Anglade, puis études à la Faculté des Sciences Humaines.',
    source: 'Fiche de campagne 2016 (lakayexpo.com)',
    toConfirm: true,
  },
  {
    id: 'medias',
    period: 'Médias',
    title: 'Journaliste et communicateur social',
    description:
      'Il exerce comme journaliste, notamment à Radio Signal FM, et intervient comme chercheur et conférencier.',
    source: 'Fiche de campagne 2016 (lakayexpo.com)',
    toConfirm: true,
  },
  {
    id: 'associatif',
    period: 'Vie associative',
    title: 'Responsabilités dans le mouvement sportif',
    description:
      'Président de la Fédération haïtienne de jeu de dames et conseiller au Comité Olympique Haïtien.',
    source: 'Fiche de campagne 2016 (lakayexpo.com)',
    toConfirm: true,
  },
  {
    id: 'presidentielle-2015',
    period: '2015 – 2016',
    title: 'Première candidature à la présidence',
    description:
      "Candidat agréé à l'élection présidentielle de 2015, puis à la reprise du scrutin en 2016, sous la bannière du Parti Unité Nationale.",
    source: 'Listes du CEP relayées par HaïtiLibre (2015, 2016)',
  },
  {
    id: 'presidentielle-2026',
    period: '2026',
    title: 'Candidat à la présidence',
    description: 'Il figure parmi les candidats inscrits à la présidentielle, sous la bannière MRN.',
    source: 'Liste des candidats inscrits relayée par HaïtiLibre (nov. 2026)',
  },
];
