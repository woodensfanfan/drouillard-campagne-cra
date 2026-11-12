import { GraduationCap, Globe2, ShieldCheck, Sprout, Zap } from 'lucide-react';
import { Compass, HeartHandshake, Hammer } from 'lucide-react';

/**
 * ⚠️ CONTENU D'EXEMPLE.
 * Les projets ci-dessous sont des formulations de travail destinées à tester
 * la mise en page. Ils n'engagent pas le candidat et doivent être remplacés
 * par le programme officiel avant de passer `site.contentValidated` à `true`.
 */

/** @type {import('types').ValueItem[]} */
export const visionPillars = [
  {
    id: 'reconstruire',
    title: 'Reconstruire',
    description: "Rétablir la sécurité et la présence de l'État, condition de tout le reste.",
    icon: Hammer,
  },
  {
    id: 'rassembler',
    title: 'Rassembler',
    description: 'Associer les dix départements et la diaspora aux décisions qui les concernent.',
    icon: HeartHandshake,
  },
  {
    id: 'relever',
    title: 'Relever',
    description: 'Créer des emplois ici, former la jeunesse et rendre le pays à nouveau attractif.',
    icon: Compass,
  },
];

/** @type {import('types').ProgramAxis[]} */
export const programAxes = [
  { id: 'securite', label: 'Sécurité & Justice', shortLabel: 'Sécurité', icon: ShieldCheck },
  { id: 'economie', label: 'Économie locale & Emploi', shortLabel: 'Économie', icon: Sprout },
  { id: 'education', label: 'Éducation & Jeunesse', shortLabel: 'Éducation', icon: GraduationCap },
  { id: 'diaspora', label: 'Diaspora & Diplomatie', shortLabel: 'Diaspora', icon: Globe2 },
  { id: 'energie', label: 'Énergie & Infrastructure', shortLabel: 'Énergie', icon: Zap },
];

/** @type {import('types').ProgramProject[]} */
export const programProjects = [
  {
    id: 'securite-territoire',
    axis: 'securite',
    title: 'Reprendre le contrôle du territoire',
    summary: 'Rouvrir les axes routiers et sécuriser durablement les quartiers.',
    measures: [
      'Renforcement des effectifs et de la formation de la PNH',
      'Sécurisation prioritaire des routes nationales',
      'Police de proximité dans les communes',
    ],
    impact: 'Libre circulation des personnes et des marchandises.',
  },
  {
    id: 'justice-accessible',
    axis: 'securite',
    title: 'Une justice qui juge',
    summary: 'Réduire la détention préventive prolongée et lutter contre la corruption.',
    measures: [
      'Réouverture et sécurisation des tribunaux',
      'Traitement accéléré des dossiers en attente',
      'Publication des décisions et des budgets',
    ],
    impact: 'Des délais de jugement plus courts et prévisibles.',
  },
  {
    id: 'agriculture-locale',
    axis: 'economie',
    title: 'Produire et consommer local',
    summary: 'Soutenir les filières agricoles et les marchés de proximité.',
    measures: [
      'Accès aux intrants et à l’irrigation',
      'Pistes rurales et stockage',
      'Achats publics tournés vers la production nationale',
    ],
    impact: 'Plus de revenus pour les producteurs, moins de dépendance aux importations.',
  },
  {
    id: 'emploi-pme',
    axis: 'economie',
    title: 'Crédit et formalisation des petites entreprises',
    summary: 'Faciliter la création d’entreprise et l’accès au financement.',
    measures: [
      'Guichet unique simplifié',
      'Garantie publique pour le microcrédit',
      'Appui aux entrepreneures et aux jeunes',
    ],
    impact: 'Des emplois durables créés dans chaque département.',
  },
  {
    id: 'ecole-pour-tous',
    axis: 'education',
    title: 'Chaque enfant à l’école',
    summary: 'Rouvrir les écoles fermées et garantir une scolarité continue.',
    measures: [
      'Réhabilitation des établissements',
      'Cantines scolaires approvisionnées localement',
      'Formation et paiement régulier des enseignants',
    ],
    impact: 'Hausse de la scolarisation et de l’assiduité.',
  },
  {
    id: 'formation-jeunesse',
    axis: 'education',
    title: 'Métiers et numérique pour la jeunesse',
    summary: 'Relier la formation professionnelle aux besoins réels du pays.',
    measures: [
      'Centres de formation technique par département',
      'Parcours numériques certifiants',
      'Stages et premier emploi accompagnés',
    ],
    impact: 'Une jeunesse qualifiée qui trouve sa place au pays.',
  },
  {
    id: 'diaspora-partenaire',
    axis: 'diaspora',
    title: 'La diaspora, partenaire à part entière',
    summary: 'Faciliter la participation civique et l’investissement des Haïtiens de l’étranger.',
    measures: [
      'Services consulaires simplifiés',
      'Cadre sécurisé pour l’investissement de la diaspora',
      'Mobilisation des compétences à distance',
    ],
    impact: 'Des transferts mieux orientés vers l’investissement productif.',
  },
  {
    id: 'diplomatie-active',
    axis: 'diaspora',
    title: 'Une diplomatie au service du pays',
    summary: 'Défendre les intérêts d’Haïti et de ses ressortissants dans la région.',
    measures: [
      'Coopération régionale renforcée',
      'Protection des migrants haïtiens',
      'Partenariats ciblés sur la sécurité et le commerce',
    ],
    impact: 'Une voix haïtienne plus écoutée et mieux respectée.',
  },
  {
    id: 'electricite-fiable',
    axis: 'energie',
    title: 'Une électricité fiable',
    summary: 'Étendre l’accès au courant en misant sur le solaire et les mini-réseaux.',
    measures: [
      'Mini-réseaux solaires communaux',
      'Modernisation du réseau existant',
      'Électrification des écoles et centres de santé',
    ],
    impact: 'Davantage d’heures de courant pour les foyers et les entreprises.',
  },
  {
    id: 'routes-eau',
    axis: 'energie',
    title: 'Routes, eau et connectivité',
    summary: 'Désenclaver les communes et sécuriser l’accès à l’eau potable.',
    measures: [
      'Entretien des routes nationales et départementales',
      'Réseaux d’eau et d’assainissement',
      'Couverture internet mobile élargie',
    ],
    impact: 'Des communes reliées entre elles et mieux desservies.',
  },
];
