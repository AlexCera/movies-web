import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		initCounter: 5
	}
});

export default app;