import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app with pickup form and status components", () => {
  render(<App />);
  const pickupForm = screen.getByLabelText("Date:");
  const pickupStatus = screen.getByLabelText("Enter Pickup ID:");
  expect(pickupForm).toBeInTheDocument();
  expect(pickupStatus).toBeInTheDocument();
});
