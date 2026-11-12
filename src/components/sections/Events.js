import { Clock, MapPin } from 'lucide-react';
import { Reveal } from 'components/ui/Reveal';
import { SampleTag } from 'components/ui/SampleTag';
import { Section } from 'components/ui/Section';
import { campaignEvents } from 'data/news';
import { formatDateParts } from 'lib/format';

/** Calendrier des prochains rassemblements et allocutions, trié par date croissante. */
export default function Events() {
  const upcoming = [...campaignEvents].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <Section
      id="evenements"
      tone="white"
      eyebrow="Événements"
      title="Prochains rendez-vous"
      intro="Rassemblements, allocutions publiques et rencontres citoyennes dans les départements."
    >
      <ol className="divide-y divide-navy-900/10 border-y border-navy-900/10">
        {upcoming.map((event, index) => {
          const { day, month, weekday } = formatDateParts(event.date);
          return (
            <li key={event.id}>
              <Reveal delay={index * 0.06}>
                <article className="flex gap-5 py-6 sm:items-center sm:gap-8">
                  <time
                    dateTime={event.date}
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-md bg-navy-900 text-white"
                  >
                    <span className="font-display text-3xl font-bold leading-none">{day}</span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-300">
                      {month}
                    </span>
                    <span className="sr-only">, {weekday}</span>
                  </time>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="eyebrow text-garnet-600">{event.kind}</p>
                      <SampleTag />
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-900">
                      {event.title} — {event.department}
                    </h3>
                    <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/80">
                      <span className="flex items-center gap-1.5">
                        <Clock aria-hidden="true" className="h-4 w-4 shrink-0" />
                        <span className="capitalize">{weekday}</span>, {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                        {event.place}
                      </span>
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
