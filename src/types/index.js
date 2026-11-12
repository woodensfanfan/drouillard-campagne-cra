/**
 * Définitions de types JSDoc partagées (aucun code exécuté).
 * Référencées ailleurs via `@type {import('types').NomDuType}` :
 * VS Code fournit ainsi l'autocomplétion sans TypeScript.
 */

/**
 * @typedef {Object} NavItem
 * @property {string} label
 * @property {string} href Ancre de section, ex. `#vision`.
 */

/**
 * @typedef {Object} Metric
 * @property {string} id
 * @property {string|null} value `null` = chiffre non encore fourni par la campagne.
 * @property {string} label
 */

/**
 * @typedef {Object} ValueItem
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {import('lucide-react').LucideIcon} icon
 */

/**
 * @typedef {Object} TimelineEntry
 * @property {string} id
 * @property {string} period
 * @property {string} title
 * @property {string} description
 * @property {string} [source] Origine publique du fait.
 * @property {boolean} [toConfirm] À faire valider par le candidat avant mise en ligne.
 */

/** @typedef {'securite'|'economie'|'education'|'diaspora'|'energie'} AxisId */

/**
 * @typedef {Object} ProgramAxis
 * @property {AxisId} id
 * @property {string} label
 * @property {string} shortLabel
 * @property {import('lucide-react').LucideIcon} icon
 */

/**
 * @typedef {Object} ProgramProject
 * @property {string} id
 * @property {AxisId} axis
 * @property {string} title
 * @property {string} summary
 * @property {string[]} measures
 * @property {string} impact
 */

/**
 * @typedef {Object} NewsArticle
 * @property {string} id
 * @property {'Communiqué'|'Terrain'|'Tribune'} category
 * @property {string} title
 * @property {string} excerpt
 * @property {string} date Date ISO (AAAA-MM-JJ).
 * @property {string} href
 */

/**
 * @typedef {Object} CampaignEvent
 * @property {string} id
 * @property {string} title
 * @property {string} date Date ISO (AAAA-MM-JJ).
 * @property {string} time
 * @property {string} place
 * @property {string} department
 * @property {'Rassemblement'|'Allocution'|'Rencontre citoyenne'} kind
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} label
 * @property {string} href
 * @property {import('lucide-react').LucideIcon} icon
 */

/**
 * @typedef {Object} JoinFormValues
 * @property {string} fullName
 * @property {string} phone
 * @property {string} location
 * @property {AxisId[]} interests
 * @property {boolean} consent
 */

/** @typedef {Partial<Record<keyof JoinFormValues, string>>} JoinFormErrors */

/** @typedef {'idle'|'loading'|'success'|'error'} SubmitStatus */

export {};
