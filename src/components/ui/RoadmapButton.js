import { Download } from 'lucide-react';
import { site } from 'data/site';
import { cn } from 'lib/format';
import { Button } from './Button';

/**
 * Lien de téléchargement de la feuille de route (PDF).
 * Tant que le document n'est pas déposé (`site.roadmap.available`),
 * le bouton est neutralisé et l'annonce clairement.
 *
 * @param {Object} props
 * @param {'outline'|'outlineLight'|'secondary'} [props.variant='outline']
 * @param {'sm'|'md'} [props.size='md']
 * @param {string} [props.label]
 * @param {string} [props.className]
 * @param {boolean} [props.compact=false] Version courte pour la barre de navigation.
 * @param {() => void} [props.onClick]
 */
export function RoadmapButton({
  variant = 'outline',
  size = 'md',
  label = 'Télécharger la feuille de route (PDF)',
  className,
  compact = false,
  onClick,
}) {
  // Libellé long : retour à la ligne autorisé sur petit écran pour éviter tout débordement.
  const classes = cn(!compact && 'max-w-full whitespace-normal py-2 sm:whitespace-nowrap', className);
  const icon = <Download aria-hidden="true" className="h-4 w-4 shrink-0" />;

  if (!site.roadmap.available) {
    return (
      <Button
        variant={variant}
        size={size}
        icon={icon}
        className={classes}
        aria-disabled="true"
        aria-label={`${compact ? label : `${label} — bientôt`} disponible`}
        title="Document bientôt disponible"
        onClick={(event) => event.preventDefault()}
      >
        {compact ? label : `${label} — bientôt`}
      </Button>
    );
  }

  return (
    <Button
      href={site.roadmap.href}
      download={site.roadmap.fileName}
      variant={variant}
      size={size}
      icon={icon}
      className={classes}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
