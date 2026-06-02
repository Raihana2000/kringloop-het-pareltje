export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5ede3',
        sand: '#d9c2a4',
        gold: '#b8864c',
        brown: '#4a3624',
        leaf: '#7a8c69',
        cocoa: '#362819'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(80, 52, 34, 0.08)',
        inset: 'inset 0 0 0 1px rgba(255,255,255,0.15)'
      }
    }
  },
  plugins: []
}
