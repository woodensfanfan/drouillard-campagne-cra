const longDate = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});
const monthShort = new Intl.DateTimeFormat('fr-FR', { month: 'short', timeZone: 'UTC' });
const weekday = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', timeZone: 'UTC' });

/** Interprète une date ISO (AAAA-MM-JJ) en UTC pour éviter tout décalage de fuseau. */
const parse = (iso) => new Date(`${iso}T00:00:00Z`);

/** « 9 novembre 2026 » */
export const formatLongDate = (iso) => longDate.format(parse(iso));

/** Éléments d'une vignette calendrier : jour, mois abrégé, jour de la semaine. */
export const formatDateParts = (iso) => {
  const date = parse(iso);
  return {
    day: String(date.getUTCDate()),
    month: monthShort.format(date).replace('.', ''),
    weekday: weekday.format(date),
  };
};

/** Concatène des classes conditionnelles en ignorant les valeurs vides. */
export const cn = (...classes) => classes.filter(Boolean).join(' ');
