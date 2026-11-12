import { cn } from 'lib/format';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:cursor-not-allowed aria-disabled:opacity-60';

const variants = {
  primary: 'bg-garnet-600 text-white hover:bg-garnet-700',
  secondary: 'bg-navy-900 text-white hover:bg-navy-700',
  outline: 'border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-50',
  outlineLight: 'border border-white/35 text-white hover:border-white hover:bg-white/10',
};

// Hauteur minimale de 44 px : cible tactile confortable sur mobile.
const sizes = {
  sm: 'min-h-[2.75rem] px-4 text-sm',
  md: 'min-h-[3rem] px-6 text-base',
};

/**
 * Bouton polymorphe : rend un `<a>` si `href` est fourni, sinon un `<button>`.
 * Garantit un style unique pour tous les appels à l'action du site.
 * Les autres props (onClick, type, disabled, download…) sont transmises à l'élément.
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'outline'|'outlineLight'} [props.variant='primary']
 * @param {'sm'|'md'} [props.size='md']
 * @param {React.ReactNode} [props.icon]
 * @param {string} [props.href]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Button(props) {
  const { variant = 'primary', size = 'md', icon, children, className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
