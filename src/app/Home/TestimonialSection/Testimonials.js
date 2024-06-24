import UserRateCard from "../components/Testimonial/UserRateCard";
import "./testimonialsStyle.css";

const rating = [
	{
		fullName: "Craig",
		image:    "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating:   [1, 1, 1, 1, 0.5],
		says:     "Fantastic restaurant! The flavors were authentic, yet innovative, and every dish we tried was a hit. The family-owned charm really shines through in the service and overall experience. This is now my go-to spot for Mediterranean cuisine.",
	},
	{
		fullName: "Vicky",
		image:    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating:   [1, 1, 1, 0, 0],
		says:     "Great experience overall. The dishes were flavorful and unique, though I felt the portions could be a bit larger. The staff was friendly and attentive, and the ambiance was cozy and welcoming. Definitely a spot worth visiting.",
	},
	{
		fullName: "Milla",
		image:    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating:   [1, 1, 1, 1, 0.5],
		says:     "Absolutely loved the food and the atmosphere at Little Lemon! The blend of traditional Mediterranean flavors with a modern twist was perfect. The service was impeccable, and the family-owned vibe made it even more special. Can't wait to come back!",
	},
	{
		fullName: "Alexa",
		image:    "https://images.unsplash.com/photo-1519934950232-98c83d9c37ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating:   [1, 1, 1, 1, 0.5],
		says:     "Little Lemon offers a delightful mix of classic and contemporary Mediterranean dishes. The food was delicious, and the presentation was beautiful. The only downside was a bit of a wait time, but it was well worth it. Highly recommend!",
	},

];

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="container grid">
				<h2>Testimonials</h2>
				{
					rating.map((customer, index) => (
						<UserRateCard key={index} customer={customer} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
