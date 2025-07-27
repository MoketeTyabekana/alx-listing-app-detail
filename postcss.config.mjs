const config = {

   content: ['./src/**/*.{ts,tsx,html}'], // adjust to your structure
  theme: {
    extend: {
      colors: {
        primary: '#FF5A5F',
        // Add actual values below or remove them
        secondary: '#4ECDC4',
        background: '#F7F7F7',
        text: '#222222',
        secondaryText: '#757575',
      },
    },
  },

  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;