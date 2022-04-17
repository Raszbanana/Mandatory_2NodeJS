<script lang="ts">
  import { 
    Column,
    Table,
    Col, 
    Row, 
    Button, 
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    FormGroup,
    Input,
    Label
  } from 'sveltestrap';
  
  let isAuthenticated = true;
  let ROWS = []
  
  async function fetchData() {
    if(localStorage.getItem("token") === null) {
      isAuthenticated = false;
    } else {
      isAuthenticated = true;
      const res = await fetch("http://localhost:3000/api/items", {
        method: "GET",
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("token")
        }
      });
      const data = await res.json();
      
      if (res.ok) {
        console.log(data)
        ROWS = data;
        return data;
      } 
      else {
        throw new Error(data);
      }
    }
  }
  
</script>

<div class="card-container">
  <Card>
    <CardHeader>
      <CardTitle>Search our inventory!</CardTitle>
    </CardHeader>
    <CardBody>
      <FormGroup>
        <Label for="exampleSearch">What do you need?</Label>
        <div class="card-search"> 
          <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="A new KEA-Mug for my favorite teacher"
          />
        </div>
      </FormGroup>
      <Button color="primary" on:click>Search</Button>
    </CardBody>
  </Card>
</div>

{#if isAuthenticated}
{#await fetchData()}
<p>loading</p>
{:then items}
<div class="table-container">
  <Table dark striped rows={ROWS} let:row>
    <Column header="itemName" width="6rem">
      {row.name}
    </Column>
    <Column header="Description" width="16rem">
      {row.description}
    </Column>
    <Column header="Price" width="2rem" class="text-right">
      {row.price},-
    </Column>
    <Column header="Quantity" width="2rem" class="text-right">
      {row.quantity}x
    </Column>
    <Column width="2rem" class="text-right">
      <Button>Add to cart</Button>
    </Column>
  </Table>
</div>
{/await}
{:else}
<h1>Login to view our products!</h1>
{/if}


<style>
  .table-container {
    margin-top: 0em;
    width: 85%;
    margin-left: auto;
  }
  
  .card-container {
    margin-top: 1%;
    width: 85%;
    margin-left: auto;
    background-color: #233d4d;
  }
  
  .card-search {
    width: 35%;
  }
</style>
