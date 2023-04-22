<script>
	import Card from '$lib/components/Card.svelte';
	let services = [
		{
			title: "PowerPoint, Word and Excel",
      excerpt: "Custom designs and fully functional templates",
      link: "/service/office",
      image: {
        nda: false
      },
      }

	]
</script>

<div class="centred">
<h1 class="centred">Practical branding</h1>
 <p>Skilled in all design disciplines we help bring your brand to life.</p>
 <p>Below are some of our frequently requested services. Don't be restricted by these
 we can tailor our skills to fit your organisation‘s needs. Take a look around our gallery or have a read of our case studies for some inspiration</p>
 <ul class="centred">
  {#each services as service}
   <li>
    <a href="{service.link}">
     <Card card="{service}"/>
    </a>
   </li>
  {/each}
 </ul>
</div>


<style lang="scss">
  a { text-decoration: none;}
  li {list-style: none;}

  .centred {
   grid-column: 4/10;
  }

  ul {padding: 0;}
</style>