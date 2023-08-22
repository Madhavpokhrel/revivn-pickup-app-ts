import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PickupStatus from "./PickupStatus";

test("renders pickup status and checks status correctly", () => {
  const mockPickupRequests = [
    {
      id: 1,
      date: "2023-08-20",
      location: "Sample Location 1",
      status: "Scheduled",
    },
    {
      id: 2,
      date: "2023-08-21",
      location: "Sample Location 2",
      status: "Picked Up",
    },
  ];

  render(<PickupStatus pickupRequests={mockPickupRequests} />);

  const idInput = screen.getByLabelText("Enter Pickup ID:") as HTMLInputElement;
  const checkButton = screen.getByRole("button", { name: /check status/i });

  fireEvent.change(idInput, { target: { value: "1" } });
  fireEvent.click(checkButton);

  const statusDisplay = screen.getByText("Status: Scheduled");
  expect(statusDisplay).toBeInTheDocument();
});

// Test other scenarios: invalid pickup ID, non-existent pickup ID, etc.
