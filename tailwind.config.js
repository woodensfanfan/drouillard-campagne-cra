/**
 * Palette républicaine sobre.
 * Couples texte/fond utilisés dans le site, tous ≥ 4.5:1 (WCAG AA) :
 *  - ink / cream            ≈ 14:1
 *  - white / navy-900       ≈ 16:1
 *  - white / garnet-600     ≈ 8.5:1
 *  - gold-300 / navy-900    ≈ 9:1
 *  - navy-700 / cream       ≈ 10:1
 * `gold-500` est réservé au décor (filets, bordures), jamais au texte sur fond clair.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2F8',
          100: '#DCE5F2',
          200: '#B7C7E0',
          600: '#1F4785',
          700: '#173768',
          800: '#102A52',
          900: '#0A1F3D',
        },
        garnet: {
          100: '#F4DEE1',
          600: '#8F1D2F',
          700: '#7A1626',
        },
        cream: {
          DEFAULT: '#F8F5EE',
          dark: '#EFEADD',
        },
        gold: {
          300: '#D9BE8F',
          500: '#B8935A',
        },
        ink: '#1B2430',
      },
      fontFamily: {
        // Piles système : zéro requête de police, rendu immédiat sur réseau mobile lent.
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      maxWidth: { content: '72rem' },
      boxShadow: {
        card: '0 1px 2px rgba(10,31,61,.06), 0 8px 24px -12px rgba(10,31,61,.18)',
      },
    },
  },
  plugins: [],
};
