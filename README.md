# Tailwind css

1.install tailwind css 
npm install -D tailwindcss
npx tailwindcss init

2.Configure created tailwindcss.config.js file
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

3.Add the tailwind directives to main css file that is index.css
@tailwind base
@tailwind components
@tailwind utilities

# Features
-Login/Sign Up
      -Sign In /Sign up Form
      -redirect to Browse Page
-Browse (after authentication)
      -Header
      -Main Movie
          -Tailer in Background
          -Title & Description
          -MovieSuggestions
              -MovieLists * N
      -NetflixGPT
          -Search Bar
        -Movie Suggestions



