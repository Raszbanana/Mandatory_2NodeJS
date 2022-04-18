<script>
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    FormGroup,
    Input,
    Col,
    Row,
  } from 'sveltestrap';
  import toastr from 'toastr';
  import verifyUser from '../../hooks/auth.js';

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    positionClass: 'toast-bottom-full-width',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '2500',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };

  let email;
  let password;
  let isAuthenticated = false;
  let open = false;
  const toggle = () => (open = !open);
  let logoSrc = 'images/logo2.png';

  function checkAuth() {
    if (localStorage.getItem('token') === null) {
      isAuthenticated = false;
      return false;
    } else {
      isAuthenticated = true;
      return true;
    }
  }

  function signOut() {
    localStorage.removeItem('token');
    isAuthenticated = false;
    toastr.warning('Signed out');
  }
  async function login(event) {
    event.preventDefault();
    await verifyUser(email, password).then((result) => {
      setTimeout(function () {
        if (localStorage.getItem('token') !== null) {
          isAuthenticated = true;
          toastr.success('Login successfull!', 'Success');
          toggle();
        } else toastr.error('Wrong credentials');
      }, 100);
    });
  }
  checkAuth();
</script>

<div class="nav-header keaShop-text">
  <Row>
    <Col>
      <div class="logo-container">
        <img src={logoSrc} class="logo-img" alt="shop-logo" />
        <a href="/#/">
          <span class="logo-text keaShop-text">KeaShop</span>
        </a>
      </div>
    </Col>
    <Col>
      <Row>
        <Col>
          <div>
            <!-- Open modal -->
            {#await login}
              <div>Test</div>
            {:then response}
              {#if isAuthenticated}
                <Button color="primary" on:click={signOut}>signOut</Button>
              {/if}
            {:catch error}
              <div>Something went wrong</div>
            {/await}
            {#if !isAuthenticated}
              <button on:click={toggle}>Login</button>
            {/if}
            <Modal isOpen={open} {toggle}>
              <ModalHeader {toggle}>
                <span class="keaShop-text">Authentication </span>
              </ModalHeader>
              <Form>
                <ModalBody>
                  <h1 class="keaShop-text">
                    Please enter your credentials to login
                  </h1>
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
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" on:click={login}>Login</Button>
                  <a href="#/signup" class="modal-signup" on:click={toggle}
                    >Signup
                  </a>
                  <Button color="secondary" on:click={toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>
            <!-- Model ends -->
          </div>
        </Col>
        <Col>
          <a href="/#/shop">
            <div class="nav-header-panel keaShop-text">Shop</div>
          </a>
        </Col>
        <Col>
          <a href="/#/faq">
            <div class="nav-header-panel keaShop-text">FAQ</div>
          </a>
        </Col>
        <Col>
          <a href="/#/contact">
            <div class="nav-header-panel keaShop-text">Contact</div>
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
</div>

<style>
  .nav-header {
    background-color: #2a695a;
    height: 6.8em;
    padding: 30px;
    border-bottom-style: double;
    border-bottom-color: #29998c;
    border-radius: 10px;
    box-shadow: 0px 1px 10px 10px #0000001f;
  }
  .nav-header-panel {
    font-size: 25px;
    margin-top: 0.5em;
    text-shadow: 2px 2px #000000;
  }
  .logo-container {
    margin-top: 1.5em;
  }
  .logo-text {
    font-size: 2.5em;
    margin-left: 3.5em;
    text-shadow: 2px 2px #000000;
  }

  .logo-img {
    height: 50px;
    width: 55px;
    position: absolute;
    margin-left: 80px;
    margin-top: 2px;
    border-radius: 10px;
  }

  .modal-signup {
    color: white;
    background-color: #287034;
    font-size: 19px;
    color: white;
    border-radius: 30px;
    margin-top: 0.5em;
    margin-right: auto;
    margin-left: auto;
    border-color: #2a695a;
    text-shadow: 2px 2px #000000;
    transition-duration: 0.4s;
    width: 72px;
    height: 32px;
    text-align: center;
  }
  button {
    background-color: #2a695a;
    font-size: 19px;
    color: white;
    border-radius: 30px;
    margin-top: 0.5em;
    margin-left: 60px;
    border-color: #2a695a;
    text-shadow: 2px 2px #000000;
    transition-duration: 0.4s;
  }
  button:hover {
    background-color: #29998c;
  }

  h1,
  span {
    text-align: center;
  }
  a {
    text-decoration: none;
    transition-duration: 0.2s;
  }
  a:hover {
    text-decoration-skip: edges;
    text-decoration: underline;
    text-decoration-color: #29993c;
  }
</style>
