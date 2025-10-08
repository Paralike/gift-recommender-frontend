import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/gift-recommender-frontend' : ''
		},
		prerender: {
			entries: ['*'], // Prerender all pages, and handle 404 errors
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404 errors during prerendering, especially for the root path
				if (path === '/404' || path === '/') {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
