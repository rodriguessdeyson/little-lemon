import { HashLink } from "react-router-hash-link";
import restaurantFoodImage from "../assets/restaurant-food.jpg";
import "./heroStyle.css";

const Hero = () => {
	return (
	<section className="hero">
		<div className="container grid">
			<div className="hero-information">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family-owned establishment, we pride ourselves on delivering the rich, vibrant flavors of Mediterranean cuisine with a contemporary flair.
					Our menu is a celebration of time-honored recipes, thoughtfully reimagined to excite modern palates.
				</p>
				<HashLink
					className="button-primary" to="/reservations">
					Reserve a table
				</HashLink>
			</div>
			<img
				className="hero-image"
				src={restaurantFoodImage}
				alt="Restaurant food"
			/>
		</div>
	</section>
  );
};

export default Hero;
