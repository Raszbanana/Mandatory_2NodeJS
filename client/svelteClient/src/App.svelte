<script>
  import NavBar from './components/navbar/NavBar.svelte';
  import Categories from './pages/Categories.svelte'
  import Home from './pages/Home.svelte';
  import { Container } from 'sveltestrap';
  import Router from 'svelte-spa-router';


</script>

<Container fluid>
  <NavBar />
  
<Router routes={{
  '/': Home,
  '/categories': Categories,

}}/>
</Container>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
