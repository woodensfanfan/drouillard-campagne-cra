import { m } from 'framer-motion';

/**
 * Apparition sobre à l'entrée dans le viewport (fondu + léger glissement), jouée une seule fois.
 * Neutralisée automatiquement si l'utilisateur préfère réduire les animations
 * (voir `MotionConfig reducedMotion="user"` dans App).
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] Décalage en secondes, pour échelonner une série.
 * @param {string} [props.className]
 */
export function Reveal({ children, delay = 0, className }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  );
}
