import greekSaladImage from "../assets/menu/greek-salad.webp"
import bruschettaImage from "../assets/menu/bruschetta.jpeg"
import lemonDessertImage from "../assets/menu/lemon-dessert.jpg"
import lemonCakeImage from "../assets/menu/lemon-cake.webp"
import hamburgerImage from "../assets/menu/hamburger-mediterranean.jpg"
import pastaNonaImage from "../assets/menu/pasta.jpg"

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

export function getWeekSpecial()
{
	const shuffled = [...meals].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, 3);
};