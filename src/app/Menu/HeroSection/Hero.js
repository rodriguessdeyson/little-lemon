import restaurantFoodImage from "../assets/little-lemon-kitchen.avif";
import "./heroStyle.css";

const Hero = () => {
	return (
	<section className="hero">
		<div className="container grid">
			<div className="hero-information">
				<h1>Menu</h1>
				<h2>Order Now!</h2>
				<p>
					Lunch, dinner or Billabong Hour?
				</p>
				<p>
					Come discover your favorite Bold Flavor in Little Lemon!
				</p>
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
