/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.css"],
  theme: {
    extend: {
      colors: {
        'col-DER': 'hsl(0, 36%, 70%)',
        'col-SR': 'hsl(0, 93%, 68%)',
        'col-DAR': 'hsl(0, 6%, 24%)',
      },
      fontFamily: {
        'JS':'Josefin Sans'
      },
      backgroundImage: {
        'Linear1': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        'Linear2': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        'Linear3': 'linear-gradient(135deg, #F9D2D3, #F8CECF)',
        'bg-Desk': "url('/images/bg-pattern-desktop.svg')",
        'Img-Mob': "url('/images/hero-mobile.jpg')",
        'Img-Desk': "url('/images/hero-desktop.jpg')"
      },
      backgroundSize: {
        '100-100': '100% 100%'
      },
      screens: {
        lxl: '1600px'
      }
    },
  },
  plugins: [],
}

