import React from "react";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import TestimonialCard from "./TestimonialCard";

describe("TestimonialCard", () => {
  const renderComponent = () => {
    render(
      <TestimonialCard
        title="Name"
        subtitle="@user"
        text="Mocked text"
        imageUrl="mocked-image.jpg"
      />
    );
  };

  it("should render with its contents", () => {
    renderComponent();

    const avatar = screen.getByText("Name");
    const name = screen.getByText("@user");
    const user = screen.getByText("Mocked text");

    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(user).toBeInTheDocument();
  });
});
