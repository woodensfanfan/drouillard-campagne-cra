import { AlertCircle } from 'lucide-react';

/** Message d'erreur annoncé aux lecteurs d'écran dès son apparition. */
export function FieldError({ id, message }) {
  return (
    <p
      id={id}
      role="alert"
      className="mt-1.5 flex min-h-[1.25rem] items-start gap-1.5 text-sm font-medium text-garnet-700"
    >
      {message && (
        <>
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{message}</span>
        </>
      )}
    </p>
  );
}

/**
 * Champ de formulaire : libellé, aide, contrôle et erreur reliés par
 * `aria-describedby` / `aria-invalid`. Supprime la duplication entre champs.
 *
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {string} [props.hint]
 * @param {string} [props.error]
 * @param {(aria: Object) => React.ReactNode} props.children Reçoit les attributs ARIA à étaler sur le contrôle.
 */
export function FormField({ id, label, hint, error, children }) {
  const hintId = hint ? `${id}-aide` : undefined;
  const errorId = `${id}-erreur`;
  const describedBy = [hintId, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-900">
        {label}
      </label>
      {hint && (
        <p id={hintId} className="mt-0.5 text-sm text-ink/70">
          {hint}
        </p>
      )}
      <div className="mt-1.5">
        {children({
          id,
          'aria-invalid': Boolean(error),
          'aria-describedby': describedBy,
          'aria-required': true,
        })}
      </div>
      <FieldError id={errorId} message={error} />
    </div>
  );
}
