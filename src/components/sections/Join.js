import { m } from 'framer-motion';
import { CheckCircle2, Loader2, Send, WifiOff } from 'lucide-react';
import { Button } from 'components/ui/Button';
import { FieldError, FormField } from 'components/ui/FormField';
import { Section } from 'components/ui/Section';
import { locationOptions } from 'data/locations';
import { programAxes } from 'data/program';
import { useJoinForm } from 'hooks/useJoinForm';
import { cn } from 'lib/format';

const commitments = [
  'Recevoir les nouvelles de la campagne par WhatsApp ou SMS',
  'Être informé des rencontres dans votre département',
  'Proposer votre aide comme bénévole, selon votre disponibilité',
];

/** Engagement civique : formulaire d'adhésion avec validation immédiate et retour d'état. */
export default function Join() {
  const { values, status, errorFor, setField, handleBlur, toggleInterest, handleSubmit, reset } =
    useJoinForm();
  const isLoading = status === 'loading';

  return (
    <Section
      id="rejoindre"
      tone="cream"
      eyebrow="Rejoindre le mouvement"
      title="Votre voix compte, votre engagement aussi"
      intro="Laissez vos coordonnées : l'équipe de votre département, ou de la diaspora, vous recontactera."
      className="bg-cream-dark"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <ul className="space-y-4 lg:col-span-4">
          {commitments.map((text) => (
            <li key={text} className="flex gap-3 text-ink/85">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-garnet-600" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-lg bg-white p-6 shadow-card sm:p-8 lg:col-span-8">
          {status === 'success' ? (
            <m.div
              role="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start gap-4 py-6"
            >
              <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-navy-700" />
              <h3 className="font-display text-2xl font-bold text-navy-900">
                Merci, {values.fullName.trim().split(/\s+/)[0]}. Votre adhésion est enregistrée.
              </h3>
              <p className="text-ink/80">
                Un membre de l'équipe vous écrira au numéro indiqué. Parlez-en autour de vous : chaque
                engagement compte.
              </p>
              <Button variant="outline" onClick={reset}>
                Inscrire une autre personne
              </Button>
            </m.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-busy={isLoading} aria-describedby="adhesion-note">
              <p id="adhesion-note" className="mb-6 text-sm text-ink/70">
                Tous les champs sont obligatoires.
              </p>

              <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                <FormField id="adhesion-nom" label="Nom complet" error={errorFor('fullName')}>
                  {(aria) => (
                    <input
                      {...aria}
                      data-field="fullName"
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      className="field-input"
                      value={values.fullName}
                      onChange={(e) => setField('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                    />
                  )}
                </FormField>

                <FormField
                  id="adhesion-telephone"
                  label="Téléphone / WhatsApp"
                  hint="Ex. 3712 3456 ou +1 305 555 0100"
                  error={errorFor('phone')}
                >
                  {(aria) => (
                    <input
                      {...aria}
                      data-field="phone"
                      type="tel"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      className="field-input"
                      value={values.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                    />
                  )}
                </FormField>

                <div className="sm:col-span-2">
                  <FormField id="adhesion-lieu" label="Département ou diaspora" error={errorFor('location')}>
                    {(aria) => (
                      <select
                        {...aria}
                        data-field="location"
                        name="location"
                        className="field-input"
                        value={values.location}
                        onChange={(e) => setField('location', e.target.value, true)}
                        onBlur={() => handleBlur('location')}
                      >
                        <option value="" disabled>
                          Sélectionner…
                        </option>
                        {locationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </FormField>
                </div>
              </div>

              <fieldset
                aria-describedby={errorFor('interests') ? 'adhesion-interets-erreur' : undefined}
                className="mt-2"
              >
                <legend className="text-sm font-semibold text-navy-900">Vos centres d'intérêt</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {programAxes.map((axis, index) => {
                    const checked = values.interests.includes(axis.id);
                    return (
                      <label
                        key={axis.id}
                        className={cn(
                          'flex min-h-[2.75rem] cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-500',
                          checked
                            ? 'border-navy-900 bg-navy-900 text-white'
                            : 'border-navy-200 bg-white text-navy-900 hover:border-navy-900',
                        )}
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={axis.id}
                          checked={checked}
                          onChange={() => toggleInterest(axis.id)}
                          data-field={index === 0 ? 'interests' : undefined}
                          className="sr-only"
                        />
                        <axis.icon aria-hidden="true" className="h-4 w-4" />
                        {axis.label}
                      </label>
                    );
                  })}
                </div>
                <FieldError id="adhesion-interets-erreur" message={errorFor('interests')} />
              </fieldset>

              <div className="mt-2">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/85">
                  <input
                    type="checkbox"
                    name="consent"
                    data-field="consent"
                    checked={values.consent}
                    onChange={(e) => setField('consent', e.target.checked, true)}
                    aria-invalid={Boolean(errorFor('consent'))}
                    aria-describedby={errorFor('consent') ? 'adhesion-accord-erreur' : undefined}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-navy-200 accent-navy-900"
                  />
                  <span>
                    J'accepte d'être recontacté par l'équipe de campagne au sujet de mon engagement.
                  </span>
                </label>
                <FieldError id="adhesion-accord-erreur" message={errorFor('consent')} />
              </div>

              {status === 'error' && (
                <p
                  role="alert"
                  className="mt-2 flex items-start gap-2 rounded-md border border-garnet-600/30 bg-garnet-100 p-3 text-sm font-medium text-garnet-700"
                >
                  <WifiOff aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  L'envoi n'a pas abouti. Vérifiez votre connexion puis réessayez : vos réponses sont
                  conservées.
                </p>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="mt-5 w-full sm:w-auto"
                icon={
                  isLoading ? (
                    <Loader2 aria-hidden="true" className="h-5 w-5 shrink-0 animate-spin" />
                  ) : (
                    <Send aria-hidden="true" className="h-5 w-5 shrink-0" />
                  )
                }
              >
                {isLoading ? 'Envoi en cours…' : 'Rejoindre le mouvement'}
              </Button>
              <p aria-live="polite" className="sr-only">
                {isLoading ? 'Envoi de votre adhésion en cours.' : ''}
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
