import chefDomenicoImage from "./assets/domenico-chef.avif"
import chefSebastianImage from "./assets/sebastian-chef.avif"
import chefOwner from "./assets/little-owner.avif"
import chefOwner2 from "./assets/little-owner_2.avif"
import inside from "../../assets/insides.avif"
import outside from "./assets/outsides.avif"
import "./aboutStyle.css";

const About = () => {
	return (
		<>
			<section className="container grid our-story" id="about">
				<div className="our-story-description">
					<h2>The Little Lemon 🍋</h2>
					<p>
						At Little Lemon, we're more than just a restaurant – we're a family brought together by a love for good food and a shared heritage.
						Our story begins with cherished recipes passed down through generations, infused with the rich, vibrant flavors of the Mediterranean.
						But we don't just cling to the past. We believe in the magic of reinvention, the chance to breathe new life into these beloved dishes.
					</p>
					<p>
						Our menu is a testament to this philosophy. We take time-honored recipes, the ones that have graced our family tables for years,
						and reimagine them with a contemporary twist. We source the freshest, seasonal ingredients, allowing their natural flavors to shine.
						We experiment with innovative techniques, plating styles, and unexpected flavor combinations, all while staying true to the heart and soul of
						Mediterranean cuisine.
					</p>
					<p>
						Little Lemon isn't just about the food, though. It's about creating an unforgettable dining experience.
						We want you to feel the warmth of our family hospitality as soon as you step through our doors. We want you to be engaged by the energy and creativity on the plate. We want you to embark on a culinary journey that excites your senses and leaves you wanting more.
						So, join us at Little Lemon. Let us take you on a voyage through the flavors of the Mediterranean, reimagined for the modern palate.
						It's a place where tradition and innovation meet on your plate, creating memories that will last a lifetime.
					</p>
				</div>
				<div className="our-story-chefs">
					<img src={chefSebastianImage} alt="Chefs Mario and Adrian #2" />
					<img src={chefDomenicoImage} alt="Chefs Mario and Adrian #1" />
				</div>
				<div className="our-story-description">
					<h2>A Journey Through Generations</h2>
					<p>
						In the heart of our bustling city, nestled among cobblestone streets and sun-kissed courtyards,
						lies Little Lemon – more than just a restaurant.
						We are a family, bound by a shared love for good food and a rich heritage that stretches back to 1957.
					</p>
					<p>
						Our story begins with Nonno Giovanni, the patriarch of our clan.
						A man with calloused hands and a heart as warm as the Mediterranean sun, he set foot on American soil with a dream.
						Armed with cherished recipes passed down through generations, he opened the doors of Little Lemon, a humble eatery that would soon become a culinary haven.
					</p>
					<p>
						Nonno Giovanni's vision was simple: infuse the vibrant flavors of his homeland into every dish.
						He believed in the magic of reinvention, the alchemy that transforms humble ingredients into extraordinary feasts.
						And so, he took those time-honored recipes – the ones that graced our family tables for years – and breathed new life into them.
					</p>
				</div>
				<div className="our-story-chefs">
					<img src={chefOwner} alt="Chefs Mario and Adrian #1" />
					<img src={chefOwner2} alt="Chefs Mario and Adrian #2" />
				</div>
				<div className="our-story-description">
					<p>
						The menu at Little Lemon is a testament to this philosophy.
						Here, you’ll find classics like Nonna Maria’s lasagna, its layers of pasta and ricotta singing of comfort and tradition.
						But look closer, and you’ll discover a contemporary twist – perhaps a drizzle of lemon-infused olive oil or a sprinkle of za’atar, bridging old and new.
					</p>
					<p>
						Our ingredients are carefully sourced – the freshest produce from local markets, seafood kissed by salty sea breezes, and herbs plucked from our rooftop garden.
						Each plate is a canvas, where innovative techniques and unexpected flavor combinations come alive. Yet, at its core, it remains true to the heart and soul of Mediterranean cuisine.
					</p>
					<p>
						Step inside Little Lemon, and you’ll feel it – the warmth of our family hospitality.
						Our walls echo with laughter, stories, and the clinking of glasses. The energy is palpable, fueled by the creativity that dances on each plate.
						We invite you to embark on a culinary journey, where your senses awaken to the symphony of tastes, textures, and aromas.
					</p>
					<p>
						So, dear guest, join us. Let Little Lemon be your compass as we sail through the flavors of the Mediterranean, reimagined for the modern palate.
						Tradition and innovation converge here, leaving indelible memories etched in every bite. 🍋
					</p>
				</div>
				<div className="our-story-chefs">
					<img src={inside} alt="Chefs Mario and Adrian #1" />
					<img src={outside} alt="Chefs Mario and Adrian #2" />
				</div>
			</section>
		</>
	);
};

export default About;
