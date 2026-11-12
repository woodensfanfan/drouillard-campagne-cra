import { useState } from 'react';
import { validateField, validateJoinForm } from 'lib/validation';
import { submitMembership } from 'services/membership';

/** @type {import('types').JoinFormValues} */
const INITIAL_VALUES = {
  fullName: '',
  phone: '',
  location: '',
  interests: [],
  consent: false,
};

/** Ordre des champs dans le DOM : sert à placer le focus sur la première erreur. */
const FIELD_ORDER = ['fullName', 'phone', 'location', 'interests', 'consent'];

const ALL_TOUCHED = Object.fromEntries(FIELD_ORDER.map((f) => [f, true]));

/**
 * État, validation et soumission du formulaire d'adhésion.
 * Une erreur s'affiche après le premier passage sur le champ (blur),
 * puis se met à jour à chaque modification.
 */
export function useJoinForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');

  /**
   * Met à jour un champ.
   * @param {keyof import('types').JoinFormValues} field
   * @param {*} value
   * @param {boolean} [validateNow=false] force la validation immédiate (cases à cocher, sans événement blur utile).
   */
  const setField = (field, value, validateNow = false) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (validateNow) setTouched((t) => ({ ...t, [field]: true }));
    if (validateNow || touched[field]) {
      setErrors((e) => ({ ...e, [field]: validateField(field, next) }));
    }
    if (status === 'error') setStatus('idle');
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validateField(field, values) }));
  };

  const toggleInterest = (axis) => {
    const next = values.interests.includes(axis)
      ? values.interests.filter((id) => id !== axis)
      : [...values.interests, axis];
    setField('interests', next, true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'loading') return;

    const nextErrors = validateJoinForm(values);
    setErrors(nextErrors);
    setTouched(ALL_TOUCHED);

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      event.currentTarget.querySelector(`[data-field="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('loading');
    try {
      await submitMembership(values);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  /** Erreur à afficher pour un champ (uniquement s'il a été visité). */
  const errorFor = (field) => (touched[field] ? errors[field] : undefined);

  return { values, status, errorFor, setField, handleBlur, toggleInterest, handleSubmit, reset };
}
