import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		host: true,
		port: 8000,
		strictPort: true,
		allowedHosts: [
			'webhook.pymecheck.cl',
			'localhost',
			'127.0.0.1'
		]
	}
});