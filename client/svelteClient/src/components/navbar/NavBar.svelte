<script>
  import { Col, Container, Row } from 'sveltestrap';
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
  } from 'sveltestrap';

  let open = false;
  const toggle = () => (open = !open);
  let logoSrc = 'images/logo2.png';

  const login = () => {

  }
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
            <button on:click={toggle}>Login</button>
            <Modal isOpen={open} {toggle}>
              <ModalHeader {toggle}>
                <span>Authentication </span>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <h1>Please enter your credentials to login</h1>
                  <FormGroup floating label="Email">
                    <Input
                      type="password"
                      name="password"
                      placeholder="johndoe123@gmail.com"
                    />
                  </FormGroup>

                  <FormGroup floating label="Password">
                    <Input
                      type="password"
                      name="password"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" on:click={login}>Login</Button>
                <Button color="secondary" on:click={toggle}>Cancel</Button>
                <Button color="secondary" on:click={toggle}>Sign up?</Button>
              </ModalFooter>
            </Modal>
            <!-- Model ends -->
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

  .logo-container {
    margin-top: 1.5em;
  }

  .logo-text {
    font-size: 2.5em;
    margin-left: 3.5em;
    text-shadow: 2px 2px #000000;
  }

  .nav-header-panel {
    font-size: 25px;
    margin-top: 0.5em;
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
    text-decoration-color: #29998c;
  }
</style>
