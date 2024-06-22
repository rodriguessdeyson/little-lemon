import { HashLink } from "react-router-hash-link";
import MealCard from "../components/Menu/MealCard";
import { getWeekSpecial } from "../../../api/MenuAPI";

import "./weekSpecialsStyle.css";
const WeekSpecials = () => {
	return (
		<section className="container grid week-specials" id="menu">
			<div className="week-specials-header">
				<h2>This week specials!</h2>
				<HashLink className="button-primary" to="/#menu">
					Online Menu
				</HashLink>
			</div>
			{getWeekSpecial().map((meal, index) => (
				<MealCard key={index} meal={meal} />
			))}
		</section>
	);
};

export default WeekSpecials;
