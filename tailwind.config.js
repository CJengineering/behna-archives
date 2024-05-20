/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibmMono: 'var(--font-ibm-plex-mono)',
        ibmSans: 'var(--font-ibm-plex-sans)',

      },
    },
  },
  plugins: [],
}

