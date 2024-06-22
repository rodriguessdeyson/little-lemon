import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../../api/BookingAPI";
import ReservationTableForm from "../components/ReservationTableForm";
import "./reservationTableStyle.css";

const updateTimes = (availableTimes, date) => {
	const response = fetchAPI(new Date(date));
	return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
	...initialAvailableTimes,
	...fetchAPI(new Date()),
];

const BookingTable = () => {
	const [availableTimes, dispatchOnDateChange] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);
	const navigate = useNavigate();

	const submitData = (formData) => {
		const response = submitAPI(formData);
		if (response) navigate("/confirmedReservation");
	};

	useEffect(() => {
		console.log("montou");
		window.scrollTo(0, 0)
	}, true)
	return (
		<div className="reservations">
			<h2>Table reservation</h2>
			<p>Reserving a table for your event at Little Lemon Restaurant is a delightful experience.
				From the moment you step through the door, you’re greeted with warm hospitality and an inviting ambiance.
				The attentive staff ensures that every detail is taken care of, from personalized table settings to accommodating any dietary preferences.
			</p>
			<p>
			As you sit down, the tantalizing aroma of freshly prepared dishes fills the air, promising a culinary journey like no other.
				Whether it’s a birthday celebration, an anniversary, or a business gathering, reserving a table allows you to savor each moment without worry.
				Little Lemon’s delectable menu, cozy atmosphere, and impeccable service make it the perfect choice for creating lasting memories with your loved ones. 🍽️🎉
			</p>
			<ReservationTableForm
				availableTimes={availableTimes}
				dispatchOnDateChange={dispatchOnDateChange}
				submitData={submitData}
			/>
		</div>
	);
};

export default BookingTable;
