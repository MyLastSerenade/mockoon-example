import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type ProxyOptions } from 'vite';

export default defineConfig(({ mode }) => {
	const backendProxyTarget = () => {
		return mode === 'test' ? 'http://localhost:3001' : 'https://dummyjson.com';
	};
	const proxy: ProxyOptions = {
		changeOrigin: true,
		ssl: false,
		secure: false,
		target: backendProxyTarget()
	};
	return {
		plugins: [sveltekit()],
		server: {
			proxy: {
				'https://dummyjson.com': proxy
			},
		},
		
	};
});
