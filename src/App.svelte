<script>
	import CounterComponent from "../src/Counter.svelte";
</script>

<main>
	<CounterComponent initCounter={100} />
	<CounterComponent />
	<CounterComponent initCounter={2} /> 
	<CounterComponent initCounter={-50} />
</main>
