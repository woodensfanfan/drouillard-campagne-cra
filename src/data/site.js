import { Facebook, MessageCircle, Youtube } from 'lucide-react';

/**
 * Configuration centrale du site.
 * Tout ce qui est marqué « À COMPLÉTER » doit être fourni par l'équipe de campagne.
 */
export const site = {
  candidateName: 'Marc-Arthur Drouillard',
  initials: 'MAD',
  role: "Candidat à la présidence d'Haïti",
  /** Slogan de travail — À COMPLÉTER par le slogan officiel. */
  slogan: 'Reconstruire. Rassembler. Relever Haïti.',
  /** Bannière politique telle que publiée dans la liste des candidats inscrits (nov. 2026). */
  party: 'MRN',
  /**
   * Tant que `false`, un bandeau « Maquette » est affiché et les contenus
   * d'exemple (actualités, agenda, mesures) sont étiquetés comme tels.
   * Passer à `true` uniquement après validation éditoriale complète.
   */
  contentValidated: false,
  /** Portrait officiel : déposer le fichier dans /public/images puis renseigner le chemin. */
  portrait: {
    src: null,
    alt: 'Portrait de Marc-Arthur Drouillard',
    width: 960,
    height: 1200,
  },
  roadmap: {
    href: '/documents/feuille-de-route.pdf',
    fileName: 'feuille-de-route-drouillard.pdf',
    /** Passer à `true` une fois le PDF déposé dans /public/documents. */
    available: false,
  },
  contact: {
    email: 'contact@exemple.ht', // À COMPLÉTER
    address: 'Port-au-Prince, Haïti',
  },
  legal: {
    /** Entité responsable de la publication — À COMPLÉTER (obligatoire avant mise en ligne). */
    publisher: 'Comité de campagne — à compléter',
  },
};

/** @type {import('types').NavItem[]} */
export const navigation = [
  { label: 'Vision', href: '#vision' },
  { label: 'Biographie', href: '#biographie' },
  { label: 'Programme & Piliers', href: '#programme' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Événements', href: '#evenements' },
  { label: 'Rejoindre', href: '#rejoindre' },
];

/**
 * Bandeau de chiffres clés.
 * Seules des valeurs factuelles sont renseignées ; les compteurs de terrain
 * restent à `null` jusqu'à ce que la campagne fournisse des chiffres réels.
 *
 * @type {import('types').Metric[]}
 */
export const metrics = [
  { id: 'departements', value: '10', label: 'départements, une seule République' },
  { id: 'axes', value: '5', label: 'axes prioritaires dans la feuille de route' },
  { id: 'visites', value: null, label: 'départements visités' },
  { id: 'consultes', value: null, label: 'citoyens consultés' },
];

/**
 * Liens officiels — À COMPLÉTER (laisser `#` masque le lien).
 * @type {import('types').SocialLink[]}
 */
export const socialLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
];
