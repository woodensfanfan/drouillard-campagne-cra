import { normalizePhone } from 'lib/validation';

const ENDPOINT = process.env.REACT_APP_MEMBERSHIP_ENDPOINT;
const TIMEOUT_MS = 12_000;

/**
 * Envoie une demande d'adhésion.
 * - Si `REACT_APP_MEMBERSHIP_ENDPOINT` est défini : POST JSON vers ce point d'entrée.
 * - Sinon (maquette) : simule un délai réseau sans rien transmettre.
 * @param {import('types').JoinFormValues} values
 * @returns {Promise<void>}
 * @throws {Error} en cas d'absence de connexion, de délai dépassé ou de réponse non 2xx.
 */
export async function submitMembership(values) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new Error('offline');
  }

  const payload = {
    fullName: values.fullName.trim(),
    phone: normalizePhone(values.phone),
    location: values.location,
    interests: values.interests,
    consent: values.consent,
  };

  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`http_${response.status}`);
  } finally {
    clearTimeout(timer);
  }
}
