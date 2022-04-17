<script>
  import { Col, Row } from 'sveltestrap';
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    FormGroup,
    Input,
    Label
  } from 'sveltestrap';
  import verifyUser from '../../hooks/auth.js';
  
  let email;
  let password;
  let isAuthenticated = false;
  let open = false;
  const toggle = () => (open = !open);
  let logoSrc = 'images/logo2.png';
  
  function checkAuth() {
    if(localStorage.getItem("token") === null) {
      isAuthenticated = false;
    } else {
      isAuthenticated = true;
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    isAuthenticated = false;
  }
  async function login(event) {
      event.preventDefault();
      await verifyUser(email, password)
      isAuthenticated = true;
      
  }
  
  checkAuth();
    
    
  </script>
  
  <div class="nav-header keaShop-text">
    <Row>
      <Col>
        <div class="logo-container">
          <a href="/#/">
            <img src={logoSrc} class="logo-img" alt="shop-logo" />
          </a>
          
          <span class="logo-text">KeaShop</span>
        </div>
      </Col>
      <Col>
        <Row>
          <Col>
            <div>
              <!-- Open modal -->
              {#if isAuthenticated}
              <Button color="primary" on:click={signOut}>signOut</Button>
              {:else}
              <button on:click={toggle}>Login</button>
              <Modal isOpen={open} {toggle}>
                <ModalHeader {toggle}>
                  <span>Authentication </span>
                </ModalHeader>
                <Form>
                  <ModalBody>
                    <h1>Please enter your credentials to login</h1>
                    <FormGroup floating label="Email">
                      <Input bind:value={email}
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
                    <Button color="secondary" on:click={toggle}>Cancel</Button>
                    <Button color="secondary" on:click={toggle}>Sign up?</Button>
                  </ModalFooter>
                </Form>
              </Modal>
              <!-- Model ends -->
              {/if}
            </div>
          </Col>
          <Col>
            <a href="/#/categories">
              <div class="nav-header-panel keaShop-text">Categories</div>
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
  