<script>
	import Pic from '$lib/components/Pic.svelte';
	import works from '$lib/content/gallery.json'
</script>


<section aria-label="gallery" id="gallery">
	{#each works.works as work }
		<Pic picture='{work}'
				 --object-fit="contain"
				 --max-width="270px"
		/>

	{/each}
</section>
<style>

    #gallery {
        grid-column: 3/-1;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 90px));
        grid-gap: 0 6px;
        margin: 0 0 0 auto;
    }

</style>