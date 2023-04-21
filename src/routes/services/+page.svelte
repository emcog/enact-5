<script>
	import Card from '$lib/components/Card.svelte';
	let services = [
		{
			title: "PowerPoint, Word and Excel",
      excerpt: "Custom designs and fully functional templates",
      link: "service/office",
      image: {
        nda: false
      },
      }

	]
</script>

<h1>Practical branding</h1>

 <ul>
  {#each services as service}
   <li>
    <a href="{service.link}">
     <Card card="{service}"/>
    </a>
   </li>
  {/each}
 </ul>

<style lang="scss">
  a {
    text-decoration: none;
  }
</style>