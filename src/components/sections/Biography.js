import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';
import { Reveal } from 'components/ui/Reveal';
import { SampleTag } from 'components/ui/SampleTag';
import { Section } from 'components/ui/Section';
import { biographyIntro, leadershipValues, timeline } from 'data/biography';
import { cn } from 'lib/format';

const tabId = (id) => `frise-onglet-${id}`;
const PANEL_ID = 'frise-panneau';

/**
 * Frise chronologique interactive, construite sur le modèle ARIA « tabs » :
 * flèches ←/→ (ou ↑/↓), Début et Fin pour naviguer au clavier.
 */
function Timeline() {
  const [activeIndex, setActiveIndex] = useState(timeline.length - 1);
  const active = timeline[activeIndex];

  const onKeyDown = (event) => {
    const last = timeline.length - 1;
    const moves = {
      ArrowRight: Math.min(activeIndex + 1, last),
      ArrowDown: Math.min(activeIndex + 1, last),
      ArrowLeft: Math.max(activeIndex - 1, 0),
      ArrowUp: Math.max(activeIndex - 1, 0),
      Home: 0,
      End: last,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActiveIndex(next);
    const target = timeline[next];
    if (target) document.getElementById(tabId(target.id))?.focus();
  };

  if (!active) return null;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Étapes du parcours"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {timeline.map((entry, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={entry.id}
              id={tabId(entry.id)}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={PANEL_ID}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'min-h-[2.75rem] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors',
                selected
                  ? 'border-navy-900 bg-navy-900 text-white'
                  : 'border-navy-900/20 bg-white text-navy-900 hover:border-navy-900',
              )}
            >
              {entry.period}
            </button>
          );
        })}
      </div>

      <div
        id={PANEL_ID}
        role="tabpanel"
        aria-labelledby={tabId(active.id)}
        tabIndex={0}
        className="mt-5 min-h-[11rem] border-l-2 border-gold-500 bg-white p-6 shadow-card"
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p className="eyebrow text-garnet-600">{active.period}</p>
            <h4 className="mt-2 font-display text-xl font-bold text-navy-900">{active.title}</h4>
            <p className="mt-2 leading-relaxed text-ink/80">{active.description}</p>
            {active.toConfirm && <SampleTag label="À confirmer par le candidat" className="mt-4" />}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Biographie & leadership : parcours, valeurs et frise chronologique. */
export function Biography() {
  return (
    <Section
      id="biographie"
      tone="white"
      eyebrow="Biographie & leadership"
      title="Un homme de parole publique, engagé pour la République"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="min-w-0 lg:col-span-5">
          <div className="space-y-4 text-lg leading-relaxed text-ink/85">
            {biographyIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-5">
            {leadershipValues.map(({ id, title, description, icon: Icon }) => (
              <li key={id} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-700">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy-900">{title}</h3>
                  <p className="text-ink/80">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
          <h3 className="font-display text-2xl font-bold text-navy-900">Parcours</h3>
          <p className="mb-5 mt-1 text-ink/75">Sélectionnez une étape pour en lire le détail.</p>
          <Timeline />
        </Reveal>
      </div>
    </Section>
  );
}
