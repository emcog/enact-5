<script>
	export let name,
						 caption,
						 hasControls = false;

	let controls = hasControls ? "controls" : null;
	export let hasBorder;

</script>

<figure class="for-md">

	<video autoplay muted loop {controls} class:hairline={hasBorder} >
		<source src="/media/{name}.mp4" type="video/mp4">
		<source src="/media/{name}.webm" type="video/webm">
		Your browser does not support the video tag.
	</video>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style lang="scss">
// see pics for md

	//figure {
	//	grid-column: 3/-1;
	//	margin: 0;
  //  @media (min-width: vars.$for-tablet-portrait-up) { grid-column: 2/-1; }
	//}
	//
	video {width: 100%}




</style>