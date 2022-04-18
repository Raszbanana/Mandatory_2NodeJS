<script>
  import { Form, FormGroup, Input, Button } from 'sveltestrap';
  import toastr from 'toastr';
  let name;
  let email;
  let password;
  let isSigned = false;

  async function signup(name, email, password) {
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 1) {
          toastr.warning(response.message);
        } else {
          isSigned = true;
          toastr.success(
            'Signup successfull! Check your email to make sure you typed in the correct email address'
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function applySignup(event) {
    event.preventDefault();
    if (email.length == 0 || password.length == 0 || name.length == 0) {
      toastr.warning('Please type in valid signup information');
    } else {
      await signup(name, email, password).then((result) => {});
    }
  }
</script>

{#if isSigned}
  <h1 class="signup-complete">Signup complete</h1>
{/if}
{#if !isSigned}
  <div class="signup-container">
    <h1 class="keaShop-text">Create an account!</h1>
    <Form>
      <FormGroup floating label="Name">
        <Input
          bind:value={name}
          type="name"
          name="name"
          placeholder="John Doe"
        />
      </FormGroup>
      <FormGroup floating label="Email">
        <Input
          bind:value={email}
          type="email"
          name="email"
          placeholder="johndoe123@gmail.com"
        />
      </FormGroup>

      <FormGroup floating label="Password">
        <Input
          bind:value={password}
          type="password"
          name="password"
          placeholder="password placeholder"
        />
      </FormGroup>
      <Button color="primary" on:click={applySignup}>Signup</Button>
    </Form>
  </div>
{/if}

<style>
  .signup-container {
    width: 20em;
    margin: auto;
    margin-top: 6em;
  }

  .signup-complete {
    margin-top: 6em;
    text-align: center;
    color: white;
  }
</style>
