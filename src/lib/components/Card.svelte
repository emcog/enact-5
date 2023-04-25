<script>

	export let card = {
		title: "",
		summary: "",
		coverImage: "",
		alt: "",
		coverWidth: "",
		coverHeight: "",
		nda: false,
		categories: []
	}



	 let {
		 coverImage,
		 alt,
		 coverWidth,
		 coverHeight,
		 nda,
		 title,
		 excerpt,
		 categories
	 } = card
</script>


	<div class="card">
		<div class="card__copy">
			<h2 class='card__title'>{title}</h2>
			<p>{excerpt}</p>
			{#if categories}
				<div class="categories">
					{#each categories as category}
						<span>{category}, </span>
					{/each}
				</div>
			{/if}
		</div>
		{#if coverImage}

			<img
			src={coverImage}
			alt="{alt}"
				width={coverWidth}
				height={coverHeight}
				style="ratio: {coverWidth} / {coverHeight}"
			/>
			{:else if nda }
			<div class="nda"><span>NDA</span></div>
			{/if}
</div>


<style lang="scss">


	.card {
		border-radius: 3px;
    box-shadow: var(--brand-shadow);
		transition: all .25s;
		display: flex;
		flex-direction: column-reverse;
		max-width: 100%;
		color: var(--brand-black);
		border: var(--brand-border);
		//background-color: var(--brand-xxlight-grey);


		&:hover {
			background: var(--brand-grad-pink);
		}

    &:hover h2 {
      text-decoration: underline;
      text-underline-position: under;
      text-underline: var(--brand-black);
    }



     @media (min-width: vars.$for-tablet-landscape-up) {
       flex-direction: row;
       grid-column: 1/-1;
			 grid-gap: 8px;
       //margin: 0 vars.$xl vars.$xs2 vars.$xl2 ;
     }

		@media (min-width: vars.$for-desktop-up) {
		}




    img {
			align-self: end;
			float: right;
		 	grid-column: 3/-1;
      height: auto;
		 	//width: 100%;
			object-fit: fill;
			margin-bottom: 0;
			padding-bottom: 0;

       @media (min-width: vars.$for-tablet-landscape-up) {
         width: 66%;
				 border-top-right-radius: 3px ;
				 border-bottom-right-radius: 3px ;
       }
     }
   }

	a { text-decoration: none; }

  a:hover { text-decoration: none;}

	.card__copy {
		margin: vars.$xs;
    align-self: start;
    //padding: vars.$lg vars.$base vars.$base vars.$base;

		@media (min-width: vars.$for-tablet-landscape-up) {
			//padding: vars.$lg 0 0 0;
		}


		h2 {
      font-size: vars.$xl;
			font-weight: bold;
			line-height: 1.3em;


      @media (min-width: vars.$for-desktop-up) { font-size: vars.$xl3; } }


		p {
			font-size: var(--sm);
			line-height: 1.2;
			font-family: var(--bodyCopy);

      @media (min-width: vars.$for-desktop-up) {
				font-size: var(--base);
				line-height: 1.6em;
				margin-top: vars.$xl; } }


		span {
			font-size: vars.$sm;
			@media (min-width: vars.$for-desktop-up) { font-size: vars.$base;} }
   }



	.nda {
		grid-column: 7/-1;
		background: var(--brand-black);
		display: flex;
		min-height: 200px;

		span {
			margin: auto;
			color: white;
		}
	}

	.categories {

    margin: auto vars.$sm vars.$sm 0;

    & span {
      line-height: 1.4;
      font-size: var(--sm);
    }
  }


</style>