import { AnimatePresence, m } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from 'components/ui/Button';
import { RoadmapButton } from 'components/ui/RoadmapButton';
import { Container } from 'components/ui/Section';
import { navigation, site } from 'data/site';
import { useMobileMenu } from 'hooks/useMobileMenu';

const MOBILE_MENU_ID = 'menu-mobile';

/** Barre de navigation fixe : identité, ancres, appels à l'action et menu mobile. */
export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[84rem] items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#accueil"
          className="flex shrink-0 flex-col leading-tight"
          aria-label={`${site.candidateName} — accueil`}
        >
          <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-navy-900 sm:text-xl">
            {site.candidateName}
          </span>
          <span className="max-w-[13rem] text-[0.625rem] font-medium uppercase leading-snug tracking-[0.12em] text-garnet-700 sm:max-w-none sm:text-[0.6875rem] lg:max-w-[13rem] 2xl:max-w-none">
            {site.slogan}
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap rounded px-2 py-2 text-sm font-medium text-navy-900/85 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <RoadmapButton size="sm" label="Feuille de route (PDF)" compact />
          <Button href="#rejoindre" size="sm">
            Rejoindre le mouvement
          </Button>
        </div>
        <div className="hidden lg:block xl:hidden">
          <Button href="#rejoindre" size="sm">
            Rejoindre
          </Button>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 hover:bg-navy-50 lg:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-navy-900/10 bg-cream lg:hidden"
          >
            <Container className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto py-4">
              <nav aria-label="Navigation mobile">
                <ul className="divide-y divide-navy-900/10">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={close}
                        className="flex min-h-[3rem] items-center text-base font-medium text-navy-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-4 grid gap-3">
                <Button href="#rejoindre" onClick={close}>
                  Rejoindre le mouvement
                </Button>
                <RoadmapButton onClick={close} />
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
