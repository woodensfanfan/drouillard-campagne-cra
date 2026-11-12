import { cn } from 'lib/format';

const tones = {
  cream: 'bg-cream text-ink',
  white: 'bg-white text-ink',
  navy: 'bg-navy-900 text-white',
};

/** Largeur de lecture et gouttières communes à toutes les sections. */
export function Container({ children, className }) {
  return <div className={cn('mx-auto w-full max-w-content px-5 sm:px-8', className)}>{children}</div>;
}

/**
 * Enveloppe sémantique d'une section : `<section>` étiquetée par son titre,
 * avec surtitre, titre de niveau 2 et introduction optionnelle.
 *
 * @param {Object} props
 * @param {string} props.id Identifiant d'ancre de la section.
 * @param {'cream'|'white'|'navy'} [props.tone='cream']
 * @param {string} props.eyebrow
 * @param {string} props.title
 * @param {string} [props.intro]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Section({ id, tone = 'cream', eyebrow, title, intro, children, className }) {
  const headingId = `${id}-titre`;
  const onDark = tone === 'navy';

  return (
    <section id={id} aria-labelledby={headingId} className={cn('py-16 sm:py-24', tones[tone], className)}>
      <Container>
        <header className="max-w-2xl">
          <p className={cn('eyebrow', onDark ? 'text-gold-300' : 'text-garnet-600')}>{eyebrow}</p>
          <h2
            id={headingId}
            className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-14 bg-gold-500" />
          {intro && (
            <p className={cn('mt-5 text-lg leading-relaxed', onDark ? 'text-navy-100' : 'text-ink/80')}>
              {intro}
            </p>
          )}
        </header>
        <div className="mt-10 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}
