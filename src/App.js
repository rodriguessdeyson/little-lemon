import Header from './components/Header'
import Navbar from './components/Navigation/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

import './App.css';

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				{/* <Route path="/" element={<Homepage />} /> */}
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="/reservations" element={<Reservation />} /> */}
				{/* <Route path="/order" element={<Order />} /> */}
				{/* <Route path="/login" element={<Login />} /> */}
				{/* <Route path="/confirmation" element={<Confirmation />} /> */}
			</Routes>
		</>
	);
}

export default App;
