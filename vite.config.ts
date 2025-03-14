import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	define: {
		"import.meta.env": {},
		"process.env": {},
	},
	build: {
		target: "esnext",
		lib: {
			entry: "src/main.tsx",
			formats: ["es"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "talent-view.js",
			},
		},
	},
	server: {
		port: 3001,
		hmr: {
			overlay: false,
		},
		strictPort: true,
		cors: true,
	},
});
