export default defineConfig({
	plugins: [react()],
	build: {
		target: "esnext",
		lib: {
			entry: "src/main.tsx",
			name: "TalentViewElement",
			formats: ["es"],
			fileName: () => "talent-view.js",
		},
	},
	server: {
		port: 3001,
		strictPort: true,
		cors: {
			origin: "http://localhost:5173",
			methods: ["GET", "POST", "OPTIONS"],
			allowedHeaders: ["Content-Type"],
		},
	},
});
