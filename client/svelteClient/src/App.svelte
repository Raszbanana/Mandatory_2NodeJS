<script>
  import NavBar from './components/navbar/NavBar.svelte';
  import Home from './pages/Home.svelte';
  import Shop from './pages/Shop.svelte';
  import Contact from './pages/Contact.svelte';
  import Faq from './pages/Faq.svelte'
  import { Container } from 'sveltestrap';
  import Router from 'svelte-spa-router';
  import { SvelteToast } from '@zerodevx/svelte-toast'


</script>

<Container fluid>
  <NavBar />
  <Router
    routes={{
      '/': Home,
      '/shop': Shop,
      '/faq': Faq,
      '/contact': Contact,

    }}
  />
</Container>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
