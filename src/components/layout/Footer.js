import { Mail, MapPin } from 'lucide-react';
import { Container } from 'components/ui/Section';
import { navigation, site, socialLinks } from 'data/site';

const legalLinks = [
  { label: 'Mentions légales', href: '#mentions-legales' },
  { label: 'Politique de confidentialité', href: '#confidentialite' },
  { label: 'Contact presse', href: `mailto:${site.contact.email}` },
];

const linkClass = 'text-navy-100 underline-offset-4 hover:text-white hover:underline';

/** Pied de page institutionnel : liens rapides, réseaux officiels, mentions et avertissement électoral. */
export function Footer() {
  const activeSocials = socialLinks.filter((link) => link.href !== '#');

  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-bold">{site.candidateName}</p>
            <p className="mt-1 text-sm text-gold-300">{site.role}</p>
            <span aria-hidden="true" className="mt-5 block h-0.5 w-14 bg-gold-500" />
            <address className="mt-5 space-y-2 text-sm not-italic text-navy-100">
              <p className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                {site.contact.address}
              </p>
              <p className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={`mailto:${site.contact.email}`} className={linkClass}>
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Liens rapides" className="md:col-span-3">
            <h2 className="eyebrow text-gold-300">Liens rapides</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="eyebrow text-gold-300">Informations</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="eyebrow mt-8 text-gold-300">Réseaux officiels</h2>
            {activeSocials.length > 0 ? (
              <ul className="mt-4 flex gap-3">
                {activeSocials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (nouvel onglet)`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-navy-100">Comptes officiels bientôt annoncés.</p>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs leading-relaxed text-navy-100">
          <p id="mentions-legales">
            <strong className="font-semibold text-white">Avertissement électoral.</strong> Ce site est un
            support de communication de campagne. Éditeur responsable : {site.legal.publisher}. Les
            propositions présentées constituent des engagements politiques et non des décisions de l'État. Les
            informations officielles relatives au scrutin (calendrier, inscription, centres de vote) sont
            publiées exclusivement par le Conseil Électoral Provisoire.
          </p>
          <p id="confidentialite" className="mt-3">
            Les données transmises via le formulaire d'adhésion servent uniquement à vous recontacter au sujet
            de la campagne. Vous pouvez demander leur suppression à tout moment.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {site.legal.publisher}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
