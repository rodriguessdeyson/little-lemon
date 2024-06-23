import { getDessertMenu } from "../../../api/MenuAPI";
import Category from "../components/CategorySection/Category";

const Dessert = () => {
	return (
		<article>
			<Category
				category="Desserts"
				slogan="So sweet..."
				dishes={getDessertMenu()}/>
		</article>
	);
};

export default Dessert;
