<script>
	export let name;
	export let age;

	const incrementAge = () => age +=1;
</script>

<style>

	h1 {
		color: purple;
	}

</style>

<main>
	<h1>Hello, I'm {name}, my age is {age}!</h1>
	<button on:click={incrementAge}>Change Age</button>
</main>

