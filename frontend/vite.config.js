// frontend/vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			// Forward any request that starts with "/api" to your backend server
			"/api": {
				target: "http://localhost:5001",
				changeOrigin: true, //  for CORS 
			},
		},
	},
});