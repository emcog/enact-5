<script>
	export let caption;
	export let images = [{}];
	export let hasBorder = false;
	console.log('PicsForMd',images.length);
	// $: gridColumn = images.length === 1 ? "grid-column: 3/-1;": "";

</script>

<figure class="for-md" style="grid-template-columns: repeat({images.length}, 1fr)">
	{ #each images as image, i }
			<img  src="/media/{image.name}" alt="{image.alt}"
						class:hairline={hasBorder}
						style="grid-column: {i+1}/{-images.length+i}"
			/>
		{ /each }

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}


</figure>

<!--	todo reinstate styles below and remove from global.scss-->
<style lang="scss">

/*
	:global .post :where(figure.for-md) {
    display: grid;
    grid-column: 2/-1;
    grid-gap: 0 vars.$xs6;
    margin: 0 0 vars.$xl2 0;

    @media (min-width: vars.$for-tablet-portrait-up) {
      grid-column: 2/-2;
    }
    @media (min-width: vars.$for-tablet-landscape-up) {
      grid-column: 3/-3;
    }


    figcaption {
      grid-column: 1/-1;
      font-size: vars.$sm;
      margin: 0;
      padding: vars.$xs4;
      background: var(--mid-grey);

      @media (min-width: vars.$for-tablet-landscape-up) {
        grid-column: 1/-1;
      }
    }

    img, video {
      width: 100%;
      object-fit: cover;
    }
  }

  :global .post .hairline { border: 1px solid #EDF2F1 }
	*/

</style>
