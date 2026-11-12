/**
 * ⚠️ CONTENU D'EXEMPLE — aucun de ces articles ou rendez-vous n'est réel.
 * Ils servent uniquement à valider la grille et le calendrier.
 * À remplacer par les communiqués et l'agenda officiels (ou par un appel API/CMS).
 */

/** @type {import('types').NewsArticle[]} */
export const newsArticles = [
  {
    id: 'exemple-communique',
    category: 'Communiqué',
    title: 'Titre du communiqué officiel',
    excerpt: 'Résumé en deux lignes du communiqué : annonce, contexte et prochaine étape.',
    date: '2026-11-09',
    href: '#',
  },
  {
    id: 'exemple-terrain',
    category: 'Terrain',
    title: 'Compte rendu d’une rencontre citoyenne',
    excerpt: 'Ce qui a été entendu sur place, les demandes exprimées et les engagements pris.',
    date: '2026-11-05',
    href: '#',
  },
  {
    id: 'exemple-tribune',
    category: 'Tribune',
    title: 'Titre d’une tribune ou prise de position',
    excerpt: 'Chapeau de la tribune : le sujet traité et la position défendue.',
    date: '2026-10-30',
    href: '#',
  },
];

/** @type {import('types').CampaignEvent[]} */
export const campaignEvents = [
  {
    id: 'exemple-rencontre',
    title: 'Rencontre citoyenne',
    date: '2026-11-20',
    time: '10 h 00',
    place: 'Lieu à confirmer',
    department: 'Nord',
    kind: 'Rencontre citoyenne',
  },
  {
    id: 'exemple-allocution',
    title: 'Allocution publique',
    date: '2026-11-24',
    time: '16 h 00',
    place: 'Lieu à confirmer',
    department: 'Ouest',
    kind: 'Allocution',
  },
  {
    id: 'exemple-rassemblement',
    title: 'Rassemblement départemental',
    date: '2026-11-28',
    time: '14 h 00',
    place: 'Lieu à confirmer',
    department: 'Sud',
    kind: 'Rassemblement',
  },
];
