import { ImageOff } from 'lucide-react';
import { site } from 'data/site';

/**
 * Portrait du candidat.
 * - Image du Hero : chargée en priorité (LCP), dimensions explicites pour éviter tout décalage (CLS).
 * - Sans fichier fourni, affiche un emplacement neutre aux mêmes proportions.
 */
export function CandidatePortrait() {
  const { src, alt, width, height } = site.portrait;

  if (!src) {
    return (
      <div
        role="img"
        aria-label="Emplacement du portrait officiel du candidat"
        className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-navy-800 text-navy-100"
      >
        <span className="font-display text-6xl font-bold tracking-tight text-white/90">{site.initials}</span>
        <span className="flex items-center gap-2 text-sm">
          <ImageOff aria-hidden="true" className="h-4 w-4" />
          Portrait officiel à intégrer
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      // Attribut HTML natif : indique au navigateur que cette image est le LCP.
      {...{ fetchpriority: 'high' }}
      className="aspect-[4/5] w-full object-cover"
    />
  );
}
