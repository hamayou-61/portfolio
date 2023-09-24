const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,vue,js,ts}'],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans JP Variable"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  daisyui: {
    themes: ["cupcake"],
    logs:false
  },
}
