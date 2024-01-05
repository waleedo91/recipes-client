import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" bg="danger" data-bs-theme="dark">
          <Container style={{ marginLeft: "10px" }}>
            <Navbar.Brand
              href="#home"
              style={{ fontFamily: "Pacifico", fontSize: "30px" }}
            >
              Recipes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/recipes" className="nav-link">
                  Recipes
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};
