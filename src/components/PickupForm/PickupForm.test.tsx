import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PickupForm from "./PickupForm";

test("renders pickup form and handles submission", () => {
  const mockSubmit = jest.fn();
  render(<PickupForm onSubmit={mockSubmit} />);

  // Fill in form fields
  const dateInput = screen.getByLabelText("Date:") as HTMLInputElement;
  const locationInput = screen.getByLabelText("Location:") as HTMLInputElement;
  const submitButton = screen.getByRole("button", {
    name: /submit pickup request/i,
  });

  const testDate = "2023-08-20"; // The date you're testing

  fireEvent.change(dateInput, { target: { value: testDate } });
  fireEvent.change(locationInput, { target: { value: "Sample Location" } });

  fireEvent.click(submitButton);

  // Assert that mockSubmit was called with the expected data
  const submittedData = {
    date: testDate,
    location: "Sample Location",
  };
  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining(submittedData)
  );
});
