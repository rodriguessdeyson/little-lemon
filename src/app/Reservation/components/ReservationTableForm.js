import { useState } from "react";
import FormField from "./FormField";

const ReservationTableForm = ({
	availableTimes,
	dispatchOnDateChange,
	submitData,
}) => {
	const minimumDate = new Date().toISOString().split("T")[0];
	const defaultTime = availableTimes[0];
	const minimumNumberOfGuests = 1;
	const maximumNumberOfGuests = 10;
	const occasions = ["Birthday", "Anniversary"];
	const invalidClientName = "Please enter a valid name";
	const invalidClientEmail = "Please enter a valid client email";
	const invalidDateErrorMessage = "Please choose a valid date";
	const invalidTimeErrorMessage = "Please choose a valid time";
	const invalidOccasionErrorMessage = "Please choose a valid occasion";
	const invalidNumberOfGuestsErrorMessage ="Please enter a number between 1 and 8";

	const [client, setClient] = useState(null);
	const [email, setEmail] = useState();
	const [date, setDate] = useState(minimumDate);
	const [time, setTime] = useState(defaultTime);
	const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
	const [occasion, setOccasion] = useState(occasions[0]);

	const isClientEmpty = () => client !== "";
	const isEmailValid = () => Boolean(email) ? /\S+@\S+\.\S+/.test(email) : true;
	const isDateValid = () => date !== "";
	const isTimeValid = () => time !== "";
	const isNumberOfGuestsValid = () => numberOfGuests !== "";
	const isOccasionValid = () => occasion !== "";

	const areAllFieldsValid = () =>
		isClientEmpty() &&
		isEmailValid() &&
		isDateValid() &&
		isTimeValid() &&
		isNumberOfGuestsValid() &&
		isOccasionValid();
 
	const handleDateChange = (e) => {
		setDate(e.target.value);
		dispatchOnDateChange(e.target.value);
	};

	const handleTimeChange = (e) => setTime(e.target.value);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		submitData({ date, time, numberOfGuests, occasion });
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<FormField
				label="Name"
				htmlFor="reservation-name"
				hasError={!isClientEmpty()}
				errorMessage={invalidClientName}
			>
				<input
					type="text"
					id="reservation-client"
					name="reservation-client"
					required={true}
					onChange={(e) => setClient(e.target.value)}
				/>
			</FormField>
			<FormField
				label="Email"
				htmlFor="reservation-email"
				hasError={!isEmailValid()}
				errorMessage={invalidClientEmail}
			>
				<input
					type="text"
					id="reservation-email"
					name="reservation-email"
					required={true}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormField>
			<FormField
				label="Date"
				htmlFor="reservation-date"
				hasError={!isDateValid()}
				errorMessage={invalidDateErrorMessage}
			>
				<input
					type="date"
					id="reservation-date"
					name="reservation-date"
					min={minimumDate}
					value={date}
					required={true}
					onChange={handleDateChange}
				/>
			</FormField>
			<FormField
				label="Time"
				htmlFor="reservation-time"
				hasError={!isTimeValid()}
				errorMessage={invalidTimeErrorMessage}
			>
				<div className="select-wrapper">
					<select
						id="reservation-time"
						name="reservation-time"
						value={time}
						required={true}
						onChange={handleTimeChange}
					>
						{availableTimes.map((times) => (
							<option data-testid="reservation-time-option" key={times}>
								{times}
							</option>
						))}
					</select>
				</div>
			</FormField>
			<FormField
				label="Number of guests"
				htmlFor="reservation-number-guests"
				hasError={!isNumberOfGuestsValid()}
				errorMessage={invalidNumberOfGuestsErrorMessage}
			>
				<input
					type="number"
					id="reservation-number-guests"
					name="reservation-number-guests"
					value={numberOfGuests}
					min={minimumNumberOfGuests}
					max={maximumNumberOfGuests}
					required={true}
					onChange={(e) => setNumberGuests(e.target.value)}
				/>
			</FormField>
			<FormField
				label="Occasion"
				htmlFor="reservation-occasion"
				hasError={!isOccasionValid()}
				errorMessage={invalidOccasionErrorMessage}
			>
				<div className="select-wrapper">
					<select
						id="reservation-occasion"
						name="reservation-occasion"
						value={occasion}
						required={true}
						onChange={(e) => setOccasion(e.target.value)}
					>
						{occasions.map((occasion) => (
							<option data-testid="reservation-occasion-option" key={occasion}>
								{occasion}
							</option>
						))}
					</select>
				</div>
			</FormField>
			<button
				className="button-primary"
				type="submit"
				disabled={!areAllFieldsValid()}
			>
				Reserve
			</button>
		</form>
	);
};

export default ReservationTableForm;
