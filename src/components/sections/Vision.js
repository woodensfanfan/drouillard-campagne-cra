import { Reveal } from 'components/ui/Reveal';
import { Section } from 'components/ui/Section';
import { visionPillars } from 'data/program';

/** Vision : trois verbes directeurs qui structurent le projet. */
export function Vision() {
  return (
    <Section
      id="vision"
      tone="cream"
      eyebrow="Vision"
      title="Un État présent, un pays qui travaille, une nation rassemblée"
      intro="Le renouveau d'Haïti ne viendra ni d'un homme seul ni d'une promesse de plus. Il viendra d'institutions qui tiennent parole et de citoyens associés à chaque étape."
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {visionPillars.map(({ id, title, description, icon: Icon }, index) => (
          <li key={id}>
            <Reveal delay={index * 0.08} className="h-full border-t-2 border-navy-900 pt-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-garnet-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon aria-hidden="true" className="h-5 w-5 text-navy-700" />
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-navy-900">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
