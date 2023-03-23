<script>
  import Callout from '$lib/components/Callout.svelte'
</script>


<svelte:head>
  <title>Contact</title>
</svelte:head>


<div class="content-wrapper">
  <h1>Contact</h1>
    <form name="contact" method="POST" data-netlify="true">
      <section>
        <label for="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" />
      </section>

      <section>
        <label for="email" > Email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
      </section>

      <section>
        <label for="message" class="message">Message</label>
        <textarea id="message" name="message" placeholder="Message"></textarea>
      </section>

      <button type="submit" class="btn btn-primary">Send</button>
    </form>
</div>

<style lang="scss">

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 var(--lg)
}

  #message { height: var(--xl9)}

  button {float: right;}







</style>