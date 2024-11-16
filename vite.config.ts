import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__API_BASE_URL__: JSON.stringify('http://127.0.0.1:3000')
	}
});
