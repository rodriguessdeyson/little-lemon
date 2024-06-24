import closedRestaurant from "../../assets/restaurant/closedLittleLemon.jpg"
import "./NotFound.css";

const NotFound = () => {
	return (
		<div className="not-found">
			<img
				src={closedRestaurant}
				alt="Closed little lemon">
			</img>
			<h2>Under construction</h2>
		</div>
	);
};

export default NotFound;
