import { LazyMotion, MotionConfig, domMax } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';
import { Biography } from 'components/sections/Biography';
import { Hero } from 'components/sections/Hero';
import { Program } from 'components/sections/Program';
import { Vision } from 'components/sections/Vision';
import { site } from 'data/site';

// Sections sous la ligne de flottaison : chargées à part pour alléger le premier rendu.
const News = lazy(() => import('components/sections/News'));
const Events = lazy(() => import('components/sections/Events'));
const Join = lazy(() => import('components/sections/Join'));

/** Bandeau affiché tant que les contenus n'ont pas été validés par la campagne. */
function DraftBanner() {
  if (site.contentValidated) return null;
  return (
    <p role="note" className="bg-garnet-700 px-4 py-2 text-center text-sm font-medium text-white">
      Maquette de travail — les éléments marqués « Exemple » ne sont pas des contenus officiels.
    </p>
  );
}

export default function App() {
  return (
    // `m` + LazyMotion : seules les fonctionnalités d'animation utilisées sont embarquées.
    // reducedMotion="user" : respecte le réglage « réduire les animations » du système.
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-navy-900 focus:shadow-card"
        >
          Aller au contenu principal
        </a>
        <DraftBanner />
        <Header />
        <main id="contenu">
          <Hero />
          <Vision />
          <Biography />
          <Program />
          <Suspense fallback={<div aria-hidden="true" className="min-h-[40rem] bg-cream" />}>
            <News />
            <Events />
            <Join />
          </Suspense>
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
