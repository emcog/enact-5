<script>
	export let picture = {
		media: [
			{
				source: "",
				srcset: ""
			}
		],
		img: {
			srcset: "",
			src: "",
			alt: "",
			caption: ""
		},
	}



</script>

<picture>
	{#if picture.media}
		{#each picture.media as media }
			<source media="{ media.source }" srcset="{ media.srcset }">
		{/each}
	{/if}
	<img
		srcset="{ picture.img.srcset }"
		src="{ picture.img.src }"
		alt="{ picture.img.alt }"/>
</picture>


<style lang="scss">

	.pic-wrapper {

	}

  picture {
    display: block;
		margin: auto;
    max-width: var(--max-width, auto);
		object-fit: var(--object-fit, contain);
		aspect-ratio: 1;
		background: var(--color, --brand-mid-grey);
  }

	img {
    margin: auto;
		max-width: var(--max-width, auto);
		object-fit: contain;
		aspect-ratio: 1;
	}


</style>