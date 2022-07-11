import "./index.scss";
import Button from "components/ui/Button";

export default function Logo() {
  return (
    <Button className="brand-text-icon" type="link" href="/">
      Stay<span className="text-dark">cation.</span>
    </Button>
  );
}
