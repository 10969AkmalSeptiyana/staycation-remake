import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import Logo from "components/Logo/Logo";
import Button from "components/ui/Button";

export default function Header(props) {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-list ms-auto">
              <li className={`nav-item ${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/explore")}`}>
                <Button className="nav-link" type="link" href="/explore">
                  Explore
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/contact")}`}>
                <Button className="nav-link" type="link" href="/contact">
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
