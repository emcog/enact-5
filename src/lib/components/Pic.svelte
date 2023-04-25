<script>
	export let picture = {
		source: [
			{
				media: "",
				srcset: "",
				type: ""
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
	{#if picture.source}
		{#each picture.source as source }
			<source media="{ source.media }"
							srcset="{ source.srcset }"
							type="{source.type}">
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