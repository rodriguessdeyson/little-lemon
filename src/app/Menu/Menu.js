import Hero from "./HeroSection/Hero";
import Salad from "./SaladSection/Salad";
import Chicken from "./ChickenSection/Chicken";
import Fish from "./FishSection/Fish";
import Meat from "./MeatSection/Meat";
import Dessert from "./DessertSection/Dessert"
import React from "react";

const Menu = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
	return (
		<>
			<Hero />
			<Salad />
			<Chicken />
			<Fish />
			<Meat />
			<Dessert />
		</>
	);
};

export default Menu;
