import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "100%": "100%",
        },
        clipPath: {
            "polygon-mobile": "polygon(0 0, 0 70%, 70% 0)",
            "polygon-normal": "polygon(0 0, 55% 0, 30% 100%, 0 100%)",
        },
        extend: {
            colors: {
                secondary: "#F4F2ED",
                black: "black",
                white: "white",
                gray: "#6b7280",
            },
            backgroundColor: {
                primary: "#17456b",
                secondary: "#F4F2ED",
            },
            backgroundImage: {
                'backdrop': "url('/assets/backdrop.jpg')"
            },
            backgroundSize: {
                '50%': "50%",
                '75%': "75%",
                'contain': "contain",
            },
            fontFamily: {
                kanit: ['Kanit', "sans-serif"],
            },
            animation: {
                bounceHorizontal: "bounceHorizontal 1s linear infinite",
            },
            keyframes: {
                bounceHorizontal: {
                    "0%, 100%": {
                        transform: "translateX(0px)",
                    },
                    "50%": {
                        transform: "translateX(10px)"
                    }
                }
            }
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwind-clip-path'),
    ],
}
export default config
