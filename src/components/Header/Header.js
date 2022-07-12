import { Container, Nav, Navbar } from "react-bootstrap";

import Logo from "components/Logo/Logo";
import Button from "components/ui/Button";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-list ms-auto">
              <li className="nav-item active">
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/">
                  Explore
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/">
                  Stories
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/">
                  Contact Us
                </Button>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
