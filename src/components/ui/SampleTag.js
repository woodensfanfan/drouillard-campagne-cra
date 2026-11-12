import { site } from 'data/site';
import { cn } from 'lib/format';

/**
 * Étiquette « Exemple » apposée sur tout contenu de démonstration.
 * Disparaît automatiquement lorsque `site.contentValidated` passe à `true`.
 */
export function SampleTag({ label = 'Exemple', className }) {
  if (site.contentValidated) return null;
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-dashed border-garnet-600/60 px-1.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-garnet-700',
        className,
      )}
    >
      {label}
    </span>
  );
}
