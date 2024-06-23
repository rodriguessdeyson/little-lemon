import Hero from "./HeroSection/Hero";
import WeekSpecials from "./SpecialSection/WeekSpecials";
import Testimonials from "./TestimonialSection/Testimonials";
import About from "./AboutSection/About";

const Home = () => {
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
