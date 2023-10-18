import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        proxy: {
            "/flight": {
                target: "https://api.travelpayouts.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/flight/, ""),
            },
            "/hotel": {
                target: "https://engine.hotellook.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/hotel/, ""),
            },
        }
    },
    plugins: [react()],
});