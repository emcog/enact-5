<script>
	export let caption;
	export let image = {};
	export let hasBorder = false;
</script>

<figure class="for-md" style="">
		<img  src="/media/{image.name}" alt="{image.alt}"
					class:hairline={hasBorder}
		/>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}


</figure>

<style lang="scss">
//  see component picsformd
</style>
