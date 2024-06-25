import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import littleLemonLogo from "./assets/littleLemonLogo.png"
import "./navStyle.css";
import { Link } from "react-router-dom";

export default function Navbar({navLinks}) {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

return (
	<header>
		<nav
			className="container grid nav-bar fill"
		>
			<HashLink className="nav-bar-logo" to="/home">
				<img src={littleLemonLogo} alt="Little Lemon logo" />
			</HashLink>
			<button
				className="nav-bar-hamburger"
				type="button"
				onClick={() => setIsNavExpanded(!isNavExpanded)}
			>
				{isNavExpanded ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faBars} />)}
			</button>
			<ul
				className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
			>
				{
					navLinks.map((navLink) => (
					<li
						key = {navLink.name}
						onClick = {() => setIsNavExpanded(false)}
						className = "hover-underline-animation"
					>
						{navLink.hashLink ? (<HashLink to={navLink.path}>{navLink.name}</HashLink>) : (<Link to={navLink.path}>{navLink.name}</Link>)}
					</li>
				))}
			</ul>
		</nav>
		</header>
	);
}