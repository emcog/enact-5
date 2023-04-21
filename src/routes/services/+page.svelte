<script>
	import Card from '$lib/components/Card.svelte';
	let services = [
		{
			name: "PowerPoint, Word and Excel",
			summary: "Custom designs and fully functional templates"
		}
	]
</script>

{#each services as service}
 <Card/>
{/each}



<style lang="scss"></style>