import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BreadCrumb from "../index";

const breadcrumb = [
  { pageTitle: "Home", pageHref: "/" },
  { pageTitle: "Hotel Details", pageHref: "" },
];

describe("Breadcrumb component", () => {
  it("Should render breadcrumb component", () => {
    render(
      <Router>
        <BreadCrumb data={breadcrumb} />
      </Router>
    );
    const breadcrumbElement = screen.getByRole("navigation");
    expect(breadcrumbElement).toBeInTheDocument();
  });
});
