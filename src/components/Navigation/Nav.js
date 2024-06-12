import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../../assets/hamburger.png";
import Close from "../../assets/close.png";

export default function Nav() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	function handleToggle() {
	setNavbarOpen(!navbarOpen);
}

return (
	<nav>
		<nav className="burger">
			<button className="burger-icon" onClick={handleToggle}>
				<img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
			</button>
			<img
				src={require("../../assets/nav-logo.png")}
				alt="Little Lemon logo"
				className="nav-image">
			</img>
		</nav>
		<Navigation device="desktop" />
			{navbarOpen ? <Navigation device="mobile" /> : ""}
		</nav>
	);
}