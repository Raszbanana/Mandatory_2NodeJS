<script>
  import NavBar from './components/navbar/NavBar.svelte';
  import Footer from './components/footer/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Shop from './pages/Shop.svelte';
  import Contact from './pages/Contact.svelte';
  import Signup from './pages/Signup.svelte';
  import Faq from './pages/Faq.svelte';
  import { Container } from 'sveltestrap';
  import Router from 'svelte-spa-router';
</script>

<Container fluid>
  <NavBar />
  <Footer />
  <Router
    routes={{
      '/': Home,
      '/shop': Shop,
      '/faq': Faq,
      '/contact': Contact,
      '/signup': Signup,
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
