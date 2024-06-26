import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Nav'
import Footer from './components/Footer/Footer'
import Home from "./app/Home/Home";
import Menu from './app/Menu/Menu'
import About from './app/About/About';
import ReservationTable from "./app/Reservation/pages/ReservationTable";
import ConfirmedReservation from "./app/Reservation/pages/ReservationConfirmed/ReservationConfirmed";
import NotFound from "./app/NotFound/NotFound";
import React from 'react';

function App() {

	const navLinks = [
		{
			name: "Home",
			path: "/home/#home",
			hashLink: true,
		},
		{
			name: "Menu",
			path: "/home/#menu",
			hashLink: true,
		},
		{
			name: "About",
			path: "/home/#about",
			hashLink: true,
		},
		{
			name: "Reservations",
			path: "/reservations",
			hashLink: false,
		},
		{
			name: "Order Online",
			path: "/menu",
			hashLink: false,
		},
		{
			name: "Login",
			path: "/login",
			hashLink: false,
		},
	];
	React.useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);

	return (
		<>
			<header>
				<Navbar navLinks={navLinks} />
			</header>
			<main id="home">
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
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
