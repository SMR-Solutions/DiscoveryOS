import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors as needed
      },
      spacing: {
        // Add custom spacing as needed
      },
    },
  },
  plugins: [],
}

export default config
