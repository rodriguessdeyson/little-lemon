import "./aboutStyle.css";
import { HashLink } from "react-router-hash-link";
import chefsMarioAndAdrian1Img from "../../../assets/chefs/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2Img from "../../../assets/chefs/chefs-mario-and-adrian_2.jpg";

const About = () => {
	return (
		<section className="container grid about-section" id="about">
			<div className="about-section-description">
				<h2>Our Story</h2>
				<p>
					Welcome to Little Lemon Restaurant, a cherished family-owned establishment since 1957.
					For over six decades, we have been dedicated to bringing the vibrant flavors of Mediterranean cuisine to our community.
				</p>
				<p>
					Our menu is a delightful fusion of traditional recipes passed down through generations, thoughtfully reimagined with a modern twist.
					At Little Lemon, we blend the warmth of our storied history with contemporary culinary creativity, ensuring a dining experience that is both nostalgic and refreshingly innovative.
				</p>
				<p>
					Join us and become part of a legacy that has been delighting guests for more than 60 years.
				</p>
			</div>
			<div className="about-section-chefs">
				<img src={chefsMarioAndAdrian1Img} alt="Chefs Mario and Adrian #1" />
				<img src={chefsMarioAndAdrian2Img} alt="Chefs Mario and Adrian #2" />
			</div>
			<div>
				<HashLink className="button-primary" to="/about">
					Read more!
				</HashLink>
			</div>
		</section>
	);
};

export default About;
