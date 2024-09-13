import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'zelo-gradient': 'linear-gradient(270deg, #2DD5C3 0%, #0076FF 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-image': 'url(/Rectangle.png)',
        'gradient-text': 'linear-gradient(270deg, #1DB3D9 0%, #2DD5C3 100%)',
        'rectangle2': "url('/Rectangle2.png')",
        'rectangle3': "url('/Rectangle3.png')",
        'group1425': "url('/Group1425.svg')",
        'custom-gradient': 'linear-gradient(90deg, #0076FF 0.01%, #2DD5C3 99.98%)',
        'zelo-blue-gradient': 'linear-gradient(90deg, rgba(0, 118, 255, 0.25) 0.01%, rgba(30, 166, 237, 0.25) 99.98%)',
      },
      colors: {
        'custom-gray': 'rgba(105, 112, 119, 0.6)',
      },
      boxShadow: {
        'home-screen': '-40px 70px 22px rgba(0, 0, 0, 0.00), -25px 45px 21px rgba(0, 0, 0, 0.01), -14px 25px 17px rgba(0, 0, 0, 0.05), -6px 11px 13px rgba(0, 0, 0, 0.09), -2px 3px 7px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
