import { AnimatePresence, m } from 'framer-motion';
import { Check, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { RoadmapButton } from 'components/ui/RoadmapButton';
import { SampleTag } from 'components/ui/SampleTag';
import { Section } from 'components/ui/Section';
import { programAxes, programProjects } from 'data/program';
import { cn } from 'lib/format';

const axisById = Object.fromEntries(programAxes.map((axis) => [axis.id, axis]));

function FilterChip({ label, selected, onSelect }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        'min-h-[2.75rem] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors',
        selected
          ? 'border-gold-300 bg-gold-300 text-navy-900'
          : 'border-white/30 text-white hover:border-white hover:bg-white/10',
      )}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }) {
  const axis = axisById[project.axis];
  const Icon = axis.icon;

  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 text-ink shadow-card">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-navy-700">
          <Icon aria-hidden="true" className="h-4 w-4" />
          {axis.label}
        </p>
        <SampleTag />
      </div>
      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-900">{project.title}</h3>
      <p className="mt-2 text-ink/80">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {project.measures.map((measure) => (
          <li key={measure} className="flex gap-2">
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-garnet-600" />
            <span>{measure}</span>
          </li>
        ))}
      </ul>
      <p className="mt-auto flex gap-2 border-t border-navy-900/10 pt-4 text-sm font-medium text-navy-900">
        <TrendingUp aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
        <span>
          <span className="sr-only">Impact attendu : </span>
          {project.impact}
        </span>
      </p>
    </article>
  );
}

/** Piliers du programme : cartes filtrables par axe prioritaire + téléchargement du document complet. */
export function Program() {
  const [filter, setFilter] = useState('tous');

  const visibleProjects = useMemo(
    () => (filter === 'tous' ? programProjects : programProjects.filter((p) => p.axis === filter)),
    [filter],
  );

  return (
    <Section
      id="programme"
      tone="navy"
      eyebrow="Programme & piliers"
      title="Cinq axes prioritaires pour reconstruire"
      intro="Chaque axe réunit des projets concrets, avec les mesures prévues et l'impact attendu. Filtrez par thème pour aller à l'essentiel."
    >
      <div
        role="group"
        aria-label="Filtrer les projets par axe"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        <FilterChip label="Tous les axes" selected={filter === 'tous'} onSelect={() => setFilter('tous')} />
        {programAxes.map((axis) => (
          <FilterChip
            key={axis.id}
            label={axis.label}
            selected={filter === axis.id}
            onSelect={() => setFilter(axis.id)}
          />
        ))}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-navy-100">
        {visibleProjects.length} projet{visibleProjects.length > 1 ? 's' : ''} affiché
        {visibleProjects.length > 1 ? 's' : ''}
      </p>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project) => (
            <m.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              <ProjectCard project={project} />
            </m.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border border-white/15 bg-navy-800 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-bold">La feuille de route complète</h3>
          <p className="mt-1 text-navy-100">Calendrier, financement et indicateurs de suivi, axe par axe.</p>
        </div>
        <RoadmapButton variant="outlineLight" label="Télécharger le document (PDF)" className="shrink-0" />
      </div>
    </Section>
  );
}
