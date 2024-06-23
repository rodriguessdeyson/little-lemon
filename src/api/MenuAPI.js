import greekSaladImage from "../assets/menu/greek-salad.avif"
import bruschettaImage from "../assets/menu/bruschetta.jpeg"
import lemonDessertImage from "../assets/menu/lemon-dessert.jpg"
import lemonCakeImage from "../assets/menu/lemon-cake.webp"
import hamburgerImage from "../assets/menu/hamburger-mediterranean.jpg"
import pastaNonaImage from "../assets/menu/pasta.jpg"

import capreseSaladImage from "../assets/menu/salads/caprese.avif"
import caeserSaladImage from "../assets/menu/salads/caeser.avif"
import greekSalad2Image from "../assets/menu/salads/greek.avif"
import brazilianSaladImage from "../assets/menu/salads/brazilian.webp"
import pastaSaladImage from "../assets/menu/salads/pasta-salad.jpg"
import roastedRootSaladImage from "../assets/menu/salads/roasted-root.webp"
import salteeSalad from "../assets/menu/salads/saltee-salad.jpg"

import curryChickenImage from "../assets/menu/chicken/chicken-curry.avif"
import creamyChickenImage from "../assets/menu/chicken/creamy-chicken.jpg"
import lemonChickenImage from "../assets/menu/chicken/lemon-chicken.jpg"
import roastedChckenThigImage from "../assets/menu/chicken/roasted-chicken-thig.webp"
import slowCookedChickenImage from "../assets/menu/chicken/slow-cooked-chicken.jpg"
import spicyChickenImage from "../assets/menu/chicken/spicy-chicken.jpg"

import meatballImage from "../assets/menu/meat/meatball.avif";
import primeRibImage from "../assets/menu/meat/prime-rib.jpg";
import steakAndFriesImage from "../assets/menu/meat/steakandfries.jpg";
import stifadoImage from "../assets/menu/meat/stifado.avif";
import theRibsImage from "../assets/menu/meat/theribs.avif";
import victoriaFillet from "../assets/menu/meat/victoriaFillet.avif";

import greekOctopusBlackRiceImage from "../assets/menu/seafood/greekOctopusBlackRice.jpg";
import grilledTunaImage from "../assets/menu/seafood/grilledTuna.jpg";
import musselsCalamariPastaImage from "../assets/menu/seafood/musselsCalamariPasta.jpg";
import oisterFreshImage from "../assets/menu/seafood/oisterFresh.jpg";
import perfectlyGrilledSalmonImage from "../assets/menu/seafood/perfectlyGrilledSalmon.jpg";
import toowoombaSalmonImage from "../assets/menu/seafood/toowoombaSalmon.avif";

import cannoliImage from "../assets/menu/desserts/cannoli.jpg";
import pannaCottaImage from "../assets/menu/desserts/pannaCotta.avif";
import tiramisuImage from "../assets/menu/desserts/tiramisu.jpg";
import zabaglioneImage from "../assets/menu/desserts/zabaglione.webp";
import sfogliatellaImage from "../assets/menu/desserts/sfogliatella.jpg";
import gelatoImage from "../assets/menu/desserts/gelato.avif";

const meals = [
	{
		name: "Greek Salad",
		image: greekSaladImage,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		name: "Bruschetta",
		image: bruschettaImage,
		price: "$9.50",
		content: "6 units",
		description: `Our Bruschetta is made from grilled bread that has been
			smeared with garlic and seasoned with salt and olive oil.`,
	},
	{
		name: "Lemon Dessert",
		image: lemonDessertImage,
		price: "$4.90",
		content: "slice",
		description: `This comes straight from grandma's recipe book, every last
			ingredient has been sourced and is as authentic as can be imagined.`,
	},
	{
		name: "Lemon Cake Dessert",
		image: lemonCakeImage,
		price: "$4.50",
		content: "slice",
		description: `Lemon cake with salty caramel is a delightful twist on the classic dessert.
		It combines the bright, zesty flavors of lemon with the rich, sweet-and-salty taste of caramel, creating a truly irresistible treat.`,
	},
	{
		name: "Hamburger Crisp",
		image: hamburgerImage,
		price: "$12.50",
		content: "unit",
		description: `Everyone loves a burger, but our Mediterranean ones come with a Hairy twist… you can eat them whilst sticking to the diet at just 413 calories per portion.
		Taste it!`,
	},
	{
		name: "Ricette della nonna",
		image: pastaNonaImage,
		price: "$12.50",
		content: "unit",
		description: ` Imagine simple, fresh ingredients bursting with flavor. A rich tomato sauce simmered for hours, fragrant with garlic and basil.
		Perfectly cooked pasta, al dente and ready to soak up all that goodness.`,
	},
];

const saladMenu = [{
		id: 1,
		name: "Caprese Salad",
		image: capreseSaladImage,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		id: 2,
		name: "Caeser Salad",
		image: caeserSaladImage,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		id: 3,
		name: "Greek Salad",
		image: greekSalad2Image,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		id: 4,
		name: "Brazilian Salad",
		image: brazilianSaladImage,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		id: 5,
		name: "Roasted Salad",
		image: roastedRootSaladImage,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		id: 6,
		name: "Pasta Salad",
		image: pastaSaladImage,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
	{
		id: 7,
		name: "Salteé Salad",
		image: salteeSalad,
		price: "$10.00",
		content: "each",
		description: `The famous greek salad of crispy lettuce, peppers, olives and
			our Chicago style feta cheese, garnished with crunchy garlic and rosemary
			croutons.`,
	},
];

const chickenMenu = [
	{
		id: 1,
		name: "Chicken Curry",
		image: curryChickenImage,
		price: "$12.00",
		content: "each",
		description: `A delightful chicken curry made with tender chicken pieces simmered in a rich,
		spicy sauce infused with aromatic spices, served with a side of steamed rice.`,
	},
	{
		id: 2,
		name: "Creamy Chicken",
		image: creamyChickenImage,
		price: "$13.00",
		content: "each",
		description: `Succulent chicken breast cooked in a creamy, savory sauce with garlic and herbs,
		garnished with fresh parsley, and served with a side of mashed potatoes.`,
	},
	{
		id: 3,
		name: "Lemon Chicken",
		image: lemonChickenImage,
		price: "$11.00",
		content: "each",
		description: `Juicy chicken thighs marinated in a zesty lemon sauce, grilled to perfection,
		and served with roasted vegetables and a sprinkle of fresh herbs.`,
	},
	{
		id: 4,
		name: "Roasted Chicken Thigh",
		image: roastedChckenThigImage,
		price: "$14.00",
		content: "each",
		description: `Tender roasted chicken thighs with a crispy skin, seasoned with garlic and rosemary,
		served with a side of roasted potatoes and seasonal vegetables.`,
	},
	{

		id: 5,
		name: "Slow Cooked Chicken",
		image: slowCookedChickenImage,
		price: "$15.00",
		content: "each",
		description: `Mouth-watering slow-cooked chicken, simmered for hours in a rich, flavorful sauce,
		served with a side of buttery mashed potatoes and steamed green beans.`,
	},
	{
		id: 6,
		name: "Spicy Chicken",
		image: spicyChickenImage,
		price: "$12.50",
		content: "each",
		description: `A fiery chicken dish marinated in a spicy blend of chili peppers and spices,
		grilled to perfection, and served with a cooling yogurt sauce and a side of rice.`,
	},
];

const seafoodMenu = [
	{
		id: 1,
		name: "Greek Octopus with Black Rice",
		image: greekOctopusBlackRiceImage,
		price: "$20.00",
		content: "each",
		description: `Tender grilled octopus served on a bed of flavorful black rice,
		garnished with fresh herbs and a squeeze of lemon.`,
	},
	{
		id: 2,
		name: "Grilled Tuna",
		image: grilledTunaImage,
		price: "$18.00",
		content: "each",
		description: `Perfectly grilled tuna steak, seasoned with a blend of spices,
		and served with a side of roasted vegetables and a tangy citrus sauce.`,
	},
	{
		id: 3,
		name: "Mussels and Calamari Pasta",
		image: musselsCalamariPastaImage,
		price: "$16.00",
		content: "each",
		description: `A delicious pasta dish featuring fresh mussels and calamari,
		tossed in a rich tomato sauce with garlic and herbs, served over al dente pasta.`,
	},
	{
		id: 4,
		name: "Fresh Oysters",
		image: oisterFreshImage,
		price: "$15.00",
		content: "dozen",
		description: `A dozen fresh oysters, served on a bed of ice with lemon wedges
		and a side of tangy mignonette sauce.`,
	},
	{
		id: 5,
		name: "Perfectly Grilled Salmon",
		image: perfectlyGrilledSalmonImage,
		price: "$19.00",
		content: "each",
		description: `A succulent salmon fillet grilled to perfection, served with a side
		of garlic butter and seasonal vegetables.`,
	},
	{
		id: 6,
		name: "Toowoomba Salmon",
		image: toowoombaSalmonImage,
		price: "$22.00",
		content: "each",
		description: `Grilled salmon topped with a creamy shrimp and mushroom sauce,
		served with a side of steamed asparagus and rice pilaf.`,
	},
];

const meatMenu = [
	{
		id: 1,
		name: "Meatball",
		image: meatballImage,
		price: "$11.00",
		content: "each",
		description: `Juicy, homemade meatballs simmered in a rich marinara sauce,
		served over a bed of al dente spaghetti and topped with freshly grated Parmesan cheese.`,
	},
	{
		id: 2,
		name: "Prime Rib",
		image: primeRibImage,
		price: "$25.00",
		content: "each",
		description: `A succulent prime rib roast cooked to perfection,
		seasoned with a blend of herbs and spices, and served with au jus and creamy horseradish sauce.`,
	},
	{
		id: 3,
		name: "Steak and Fries",
		image: steakAndFriesImage,
		price: "$18.00",
		content: "each",
		description: `A classic dish featuring a perfectly grilled steak,
		served with crispy, golden French fries and a side of garlic butter.`,
	},
	{
		id: 4,
		name: "Stifado",
		image: stifadoImage,
		price: "$17.00",
		content: "each",
		description: `A traditional Greek beef stew, slow-cooked with onions,
		tomatoes, and a blend of aromatic spices, served with a side of warm, crusty bread.`,
	},
	{
		id: 5,
		name: "Barbecue Ribs",
		image: theRibsImage,
		price: "$22.00",
		content: "each",
		description: `Tender, fall-off-the-bone ribs slathered in a smoky barbecue sauce,
		grilled to perfection and served with coleslaw and cornbread.`,
	},
	{
		id: 6,
		name: "Victoria Fillet",
		image: victoriaFillet,
		price: "$30.00",
		content: "each",
		description: `A premium cut of fillet steak, cooked to your liking,
		served with a side of steamed broccoli`,
	},
];

const dessertMenu = [
	{
		id: 1,
		name: "Cannoli",
		image: cannoliImage,
		price: "$5.00",
		content: "each",
		description: `Crispy pastry shells filled with a sweet, creamy ricotta cheese mixture,
		garnished with chocolate chips and powdered sugar.`,
	},
	{
		id: 2,
		name: "Panna Cotta",
		image: pannaCottaImage,
		price: "$6.00",
		content: "each",
		description: `A smooth and creamy dessert made with sweetened cream and vanilla,
		served with a berry compote and a sprig of mint.`,
	},
	{
		id: 3,
		name: "Tiramisu",
		image: tiramisuImage,
		price: "$7.00",
		content: "each",
		description: `A classic Italian dessert made with layers of coffee-soaked ladyfingers
		and a rich mascarpone cream, dusted with cocoa powder.`,
	},
	{
		id: 4,
		name: "Zabaglione",
		image: zabaglioneImage,
		price: "$6.50",
		content: "each",
		description: `A light and airy custard made with egg yolks, sugar, and Marsala wine,
		served with fresh berries and a sprinkle of powdered sugar.`,
	},
	{
		id: 5,
		name: "Sfogliatella",
		image: sfogliatellaImage,
		price: "$4.50",
		content: "each",
		description: `A traditional Neapolitan pastry with a crisp, flaky shell and a sweet,
		creamy filling made with ricotta cheese and semolina.`,
	},
	{
		id: 6,
		name: "Gelato",
		image: gelatoImage,
		price: "$5.50",
		content: "scoop",
		description: `Rich and creamy Italian ice cream available in a variety of flavors,
		served by the scoop and topped with a wafer cookie.`,
	},
];

export function getWeekSpecial()
{
	const shuffled = [...meals].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, 3);
};

export function getSaladMenu()
{
	return saladMenu;
}

export function getChickenMenu()
{
	return chickenMenu;
}

export function getMeatMenu()
{
	return meatMenu;
}

export function getSeafoodMenu()
{
	return seafoodMenu;
}

export function getDessertMenu()
{
	return dessertMenu;
}