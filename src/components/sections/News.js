import { ArrowUpRight } from 'lucide-react';
import { Reveal } from 'components/ui/Reveal';
import { SampleTag } from 'components/ui/SampleTag';
import { Section } from 'components/ui/Section';
import { newsArticles } from 'data/news';
import { formatLongDate } from 'lib/format';

/** Grille des articles et communiqués récents. */
export default function News() {
  return (
    <Section
      id="actualites"
      tone="cream"
      eyebrow="Actualités"
      title="Communiqués et nouvelles du terrain"
      intro="Les prises de position officielles et les comptes rendus des déplacements."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {newsArticles.map((article, index) => (
          <li key={article.id}>
            <Reveal delay={index * 0.07} className="h-full">
              <article className="group relative flex h-full flex-col rounded-lg border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow text-garnet-600">{article.category}</p>
                  <SampleTag />
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-900">
                  {/* Lien étendu à toute la carte via ::after, sans imbriquer d'éléments interactifs. */}
                  <a href={article.href} className="after:absolute after:inset-0 after:rounded-lg">
                    {article.title}
                  </a>
                </h3>
                <p className="mt-2 text-ink/80">{article.excerpt}</p>
                <p className="mt-auto flex items-center justify-between pt-6 text-sm text-ink/70">
                  <time dateTime={article.date}>{formatLongDate(article.date)}</time>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-navy-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
