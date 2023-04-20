<script>
	import Pic from '$lib/components/Pic.svelte';
	import works from '$lib/content/gallery.json'
</script>

<!--todo add sketches-->
<!--todo add ui drawings-->


<section aria-label="gallery" id="gallery">
	{#each works.works as work }
<!--		<div class="square">-->
			<Pic picture='{work}'
					 --object-fit="contain"
					 --max-width="270px"
					 />
<!--		</div>-->
	{/each}
</section>
<style>




	/*todo import or refactor breakpoints from #content */
	#gallery {
			grid-column: 3/-1;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(270px, 90px));
      grid-gap: 0 6px;
			margin: 0 0 0 auto;
	}



	/*.square {*/
	/*	aspect-ratio: 1;*/
	/*	width: 270px;*/
	/*	display: block;*/
	/*}*/

  .square {
  /*    position: relative;*/
  /*    !*flex-basis: calc(33.333% - 10px);*!*/
  /*    !*margin: 5px;*!*/
      border: 1px solid;
  /*    box-sizing: border-box;*/
  }

  /*.square::before {*/
  /*    content: '';*/
  /*    display: block;*/
  /*    padding-top: 100%;*/
  /*}*/

  /*.square .content {*/
  /*    position: absolute;*/
  /*    top: 0; left: 0;*/
  /*    height: 100%;*/
  /*    width: 100%;*/

  /*    display: flex;               !* added for centered text *!*/
  /*    justify-content: center;     !* added for centered text *!*/
  /*    align-items: center;         !* added for centered text *!*/
  /*}*/

</style>