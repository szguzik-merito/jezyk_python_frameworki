/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.html",  // Wszystkie szablony Django
        "./frontend/src/**/*.js", // Pliki JavaScript Reacta
        "./static/js/**/*.js", // Pliki JavaScript w static
        "./frontend/static/js/**/*.js" // Pliki JavaScript w build Reacta
    ],
    safelist: [
        "bg-black",
        "w-full",
        "text-white",
        "max-w-[1400px]",
        "mx-auto",
        "flex",
        "justify-between",
        "items-center",
        "py-4",
        "px-6"
    ],
    theme: {
        extend: {
            keyframes: {
                spinSlow: {
                    from: {transform: "rotate(0deg)"},
                    to: {transform: "rotate(360deg)"},
                },
                blink: {
                    '0%, 100%': {backgroundColor: 'transparent'},
                    '50%': {backgroundColor: '#d1f7c4'} // Blady zielony
                },
                glow: {
                    '0%, 100%': {filter: 'brightness(1)'},
                    '50%': {filter: 'brightness(4.5)'},
                },
                heart: {
                    '0%': {filter: 'brightness(1)'},
                    '15%': {filter: 'brightness(4)'},
                    '30%': {filter: 'brightness(2)'},
                    '50%': {filter: 'brightness(4)'},
                    '70%': {filter: 'brightness(1.5)'},
                    '100%': {filter: 'brightness(1)'}
                }
            },
            animation: {
                glow: 'glow 5s infinite ease-in-out',
                heart: 'heart 2s infinite ease-in-out',
                'blink-green': 'blink 2s infinite', // Animacja co 2 sekundy
                "spin-slow": "spinSlow 3s linear infinite",
            },
        },
    },
    plugins: [],
};