const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, theme, e }) {
    const colors = theme("colors");

    const utilities = Object.entries(colors).flatMap(([colorName, colorValue]) => {
        if (typeof colorValue === "object") {
            return Object.entries(colorValue).map(([shade, value]) => ({
                [e(`.bg\\.${colorName}\\.${shade}`)]: {
                    backgroundColor: value,
                },
            }));
        }
        return {
            [e(`.bg\\.${colorName}`)]: {
                backgroundColor: colorValue,
            },
        };
    });

    addUtilities(utilities);
});
