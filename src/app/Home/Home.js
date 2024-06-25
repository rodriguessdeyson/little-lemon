import Hero from "./HeroSection/Hero";
import WeekSpecials from "./SpecialSection/WeekSpecials";
import Testimonials from "./TestimonialSection/Testimonials";
import About from "./AboutSection/About";
import React from "react";

const Home = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Hero />
			<WeekSpecials />
			<Testimonials />
			<About />
		</>
	);
};

export default Home;
