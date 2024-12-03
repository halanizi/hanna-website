import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            white: colors.white,
            gray: colors.gray,
            periwinkle: "#D8DCFF",
            darkperiwinkle: "#AEADF0",
            rosybrown: "#C38D94",
            chinarose: "#A76571",
            ultraviolet: "#565676",
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config;
