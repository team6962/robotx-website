module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                fill: 'repeat(auto-fill, minmax(100px, 1fr))'
            }
        }
    },
    plugins: []
};
