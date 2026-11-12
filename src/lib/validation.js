import { locationOptions } from 'data/locations';

/**
 * Supprime espaces, tirets, points et parenthèses d'un numéro saisi.
 * @param {string} raw
 * @returns {string}
 */
export const normalizePhone = (raw) => raw.replace(/[\s().-]/g, '');

/** Numéro haïtien local : 8 chiffres commençant par 2, 3, 4 ou 5. */
const HAITI_LOCAL = /^[2-5]\d{7}$/;
/** Format international E.164 (diaspora) : + suivi de 8 à 15 chiffres. */
const E164 = /^\+[1-9]\d{7,14}$/;
const NAME = /^[\p{L}][\p{L}\s'’.-]{1,79}$/u;

const validators = {
  fullName: ({ fullName }) => {
    const value = fullName.trim();
    if (!value) return 'Indiquez votre nom complet.';
    if (!NAME.test(value)) return 'Le nom doit contenir au moins 2 lettres, sans chiffres.';
    return undefined;
  },
  phone: ({ phone }) => {
    const value = normalizePhone(phone);
    if (!value) return 'Indiquez un numéro de téléphone ou WhatsApp.';
    if (!HAITI_LOCAL.test(value) && !E164.test(value)) {
      return 'Format attendu : 8 chiffres (ex. 3712 3456) ou international (ex. +509 3712 3456).';
    }
    return undefined;
  },
  location: ({ location }) =>
    locationOptions.includes(location) ? undefined : 'Sélectionnez votre département ou « Diaspora ».',
  interests: ({ interests }) =>
    interests.length > 0 ? undefined : 'Choisissez au moins un centre d’intérêt.',
  consent: ({ consent }) => (consent ? undefined : 'Votre accord est nécessaire pour être recontacté.'),
};

/**
 * Valide un champ isolé (utilisé au blur et à la saisie).
 * @param {keyof import('types').JoinFormValues} field
 * @param {import('types').JoinFormValues} values
 * @returns {string|undefined} Message d'erreur, ou `undefined` si le champ est valide.
 */
export const validateField = (field, values) => validators[field](values);

/**
 * Valide l'ensemble du formulaire.
 * @param {import('types').JoinFormValues} values
 * @returns {import('types').JoinFormErrors} Ne contient que les champs en erreur.
 */
export const validateJoinForm = (values) => {
  const errors = {};
  Object.keys(validators).forEach((field) => {
    const message = validators[field](values);
    if (message) errors[field] = message;
  });
  return errors;
};
