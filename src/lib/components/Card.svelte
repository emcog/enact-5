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


	<section class="card">
		<div class="card__copy">
			<h2>{title}</h2>
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
</section>


<style lang="scss">

	.card {

		transition: all .25s;
		display: flex;
		flex-direction: column-reverse;
		max-width: 100%;
		color: var(--brand-black);


		&:hover {background: var(--bright-green);}



     @media (min-width: vars.$for-tablet-landscape-up) {
       flex-direction: row;
       grid-column: 1/-1;
			 grid-gap: 8px;
       //margin: 0 vars.$xl vars.$xs2 vars.$xl2 ;
     }

		@media (min-width: vars.$for-desktop-up) {
			//margin: 0 vars.$xl5 vars.$xs2 vars.$xl5;
		}

    	//&:hover{ background: var(--soft-green); }


    img {
			align-self: end;
			float: right;
		 grid-column: 3/-1;
      height: auto;
			 width: 100%;
			 object-fit: cover;
       margin-bottom: 0;
       padding-bottom: 0;
       @media (min-width: vars.$for-tablet-landscape-up) {
         width: 50%;
       }
     }
   }

	a { text-decoration: none; }

  a:hover { text-decoration: none;}

	.card__copy {
    align-self: start;
		//grid-column: 1/7;
    margin: 0;
    padding: 0 vars.$base vars.$base 0;

		@media (min-width: vars.$for-tablet-landscape-up) {
			//padding: vars.$lg 0 0 0;
		}


		h2 {
      font-size: vars.$xl;
			font-weight: bold;


      @media (min-width: vars.$for-desktop-up) { font-size: vars.$xl2; } }


		p {
			font-size: vars.$base;
			line-height: 1.2;
			font-family: var(--bodyCopy);

      @media (min-width: vars.$for-desktop-up) {
				font-size: vars.$lg;
				line-height: 1.2;
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

	.categories { margin: 0 vars.$sm vars.$sm 0}
	.categories > span { line-height: 1.4 }


</style>