import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "../../Reservation/pages/ReservationTable";
window.scrollTo = jest.fn();

describe("Reservations page", () => {
	afterAll(() => {
		jest.clearAllMocks();
	});
	const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

	test("should have one or more available reservation time options", async () => {
		render(
			<MemoryRouter>
				<Reservations />
			</MemoryRouter>
		);

		const timeOptions = await screen.findAllByTestId("reservation-time-option");

		expect(timeOptions.length).toBeGreaterThanOrEqual(1);
		timeOptions.forEach((timeOption) =>
			expect(timeOption.value).toMatch(timeFormat)
		);
	});
});
