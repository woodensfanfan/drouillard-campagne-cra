import { m } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from 'components/ui/Button';
import { CandidatePortrait } from 'components/ui/CandidatePortrait';
import { Container } from 'components/ui/Section';
import { metrics, site } from 'data/site';

/** Entrée en scène échelonnée du bloc texte (une seule fois, au chargement). */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/** Section d'ouverture : accroche, double appel à l'action, portrait asymétrique et chiffres clés. */
export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="accueil-titre"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      {/* Filet tricolore discret : rappel des couleurs nationales sans surcharge. */}
      <div aria-hidden="true" className="flex h-1">
        <span className="flex-1 bg-navy-600" />
        <span className="flex-1 bg-garnet-600" />
        <span className="w-16 bg-gold-500" />
      </div>

      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <m.div variants={stagger} initial="hidden" animate="visible" className="lg:col-span-7">
          <m.p variants={item} className="eyebrow text-gold-300">
            {site.role} · {site.party}
          </m.p>
          <m.h1
            id="accueil-titre"
            variants={item}
            className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Haïti se relève quand l'État <span className="text-gold-300">revient vers ses citoyens.</span>
          </m.h1>
          <m.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
            Sécurité, travail, école, énergie : une feuille de route claire pour reconstruire le pays, avec
            les dix départements et la diaspora.
          </m.p>
          <m.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#rejoindre" icon={<Users aria-hidden="true" className="h-5 w-5 shrink-0" />}>
              Je m'engage
            </Button>
            <Button
              href="#programme"
              variant="outlineLight"
              icon={<ArrowRight aria-hidden="true" className="order-last h-5 w-5 shrink-0" />}
            >
              Découvrir le plan
            </Button>
          </m.div>
        </m.div>

        {/* Composition asymétrique : portrait décalé, cadre or en retrait. */}
        <m.figure
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:col-start-8 lg:mr-0 lg:translate-y-6"
        >
          <span
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full border border-gold-500/70"
          />
          <span aria-hidden="true" className="absolute -right-3 -top-3 h-16 w-16 bg-garnet-600" />
          <div className="relative overflow-hidden">
            <CandidatePortrait />
          </div>
          <figcaption className="relative mt-3 text-sm text-navy-100">{site.candidateName}</figcaption>
        </m.figure>
      </Container>

      <div className="border-t border-white/10 bg-navy-800">
        <Container>
          <dl className="grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
            {metrics.map((metric) => (
              <div key={metric.id} className="flex flex-col-reverse gap-1 px-1 py-5 lg:px-6">
                <dt className="text-sm leading-snug text-navy-100">{metric.label}</dt>
                <dd className="font-display text-3xl font-bold text-white">
                  {metric.value ?? (
                    <span className="text-base font-semibold text-gold-300">Chiffre à venir</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
