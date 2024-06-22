import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Nav'
import Footer from './components/Footer/Footer'
import Home from "./app/Home/Home";
import About from './app/About/About';
import ReservationTable from "./app/Reservation/pages/ReservationTable";
import ConfirmedReservation from "./app/Reservation/pages/ReservationConfirmed/ReservationConfirmed";
import NotFound from "./app/NotFound/NotFound";

function App() {

	const navLinks = [
		{
			name: "Home",
			path: "/#home",
			hashLink: true,
		},
		{
			name: "Menu",
			path: "/#menu",
			hashLink: true,
		},
		{
			name: "About",
			path: "/#about",
			hashLink: true,
		},
		{
			name: "Reservations",
			path: "/reservations",
			hashLink: false,
		},
		{
			name: "Order Online",
			path: "/orderOnline",
			hashLink: false,
		},
		{
			name: "Login",
			path: "/login",
			hashLink: false,
		},
	];

	return (
		<>
			<header>
				<Navbar navLinks={navLinks} />
			</header>
			<main id="home">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/reservations" element={<ReservationTable />} />
					<Route path="/confirmedReservation" element={<ConfirmedReservation />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer navLinks={navLinks} />
		</>
	);
}

export default App;
