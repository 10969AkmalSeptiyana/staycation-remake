import Button from "components/ui/Button";
import Logo from "components/Logo/Logo";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-auto" style={{ width: 350 }}>
          <Logo />
          <p className="brand-tagline">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>

        <div className="col col-md-3">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/register">
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/properties">
                Start Booking a Room
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/use-payments">
                Use Payments
              </Button>
            </li>
          </ul>
        </div>

        <div className="col col-md-3">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/careers">
                Our Careers
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/privacy">
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/terms">
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>

        <div className="col col-md-2">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button
                isExternal
                type="link"
                href="mailto:support@staycation.id"
                target="_blank"
                rel="_blank"
              >
                supports@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button
                isExternal
                type="link"
                href="tel:+6221222081996"
                target="_blank"
                rel="_blank"
              >
                021 - 2208 - 1996
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Kemang, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col text-center copyrights">
          <span>Copyright 2019 • All rights reserved • Staycation</span>
        </div>
      </div>
    </footer>
  );
}
