import Logo from "components/Logo/Logo";
import Button from "components/ui/Button";
import { ReactComponent as MenuToggle } from "assets/images/menu-toggle.svg";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Logo />
          <Button
            className="d-sm-none"
            style={{ border: 0, background: "transparent" }}
          >
            <MenuToggle />
          </Button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/explore">
                  Explore
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/contact">
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
