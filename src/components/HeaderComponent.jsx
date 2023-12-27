import { Navbar, Container, Nav } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" bg="danger" data-bs-theme="dark">
          <Container>
            <Navbar.Brand
              href="#home"
              style={{ fontFamily: "Pacifico", fontSize: "30px" }}
            >Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Recipes</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default HeaderComponent;
