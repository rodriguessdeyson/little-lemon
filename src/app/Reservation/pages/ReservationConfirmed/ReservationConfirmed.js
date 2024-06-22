import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headChefImage from "../../assets/head_chef.jpg"
import cheeseImage from "../../assets/cheese.png"
import saladImage from "../../assets/salad.png"
import "./reservationConfirmedStyle.css"
const ConfirmedReservation = () => {
	return (
		<div className="reservation">
			<FontAwesomeIcon icon={faCircleCheck} size="3x" />
			<h2>Your table has been reserved!</h2>
			<p>You'll receive a confirmation email with all the details.</p>
			<div className="container-reservation">
				<div className="image">
					<img src={headChefImage} alt="cheff" />
					<img className="cheese" src={cheeseImage} alt="cheese" />
					<img className="salad" src={saladImage} alt="salad" />
				</div>
			</div>
		</div>
	);
};

export default ConfirmedReservation;
