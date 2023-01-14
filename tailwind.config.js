/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{jsx,js}"],
	theme: {
		extend: {
			//원하는 색,로고용 폰트 지정
			colors: {
				brand: "#ff0000",
			},
			fontFamily: {
				LeagueGothic: ["League Gothic", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
