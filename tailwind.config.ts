import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '3pct': '3%'
      },
      fontFamily: { 
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
       primary: '#FFFFFF',
       primary1: '',
       secondary: '#F5F5F5',
       secondary1: '',
       BG:'',
       Text: '#FAFAFA',
       Text1: '',
       Text2: '#000000',
       Button: '#000000',
       secondary2: '#DB4444',
       Button1: '#00FF66',
       Button2: '#DB4444',
       Hover_Button: '',
       Hover_Button1: '',
      },
    },
  },
  plugins: [],
};
export default config;
