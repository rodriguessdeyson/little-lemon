import { getChickenMenu } from "../../../api/MenuAPI";
import Category from "../components/CategorySection/Category";

const Chicken = () => {
	return (
		<article>
			<Category
				category="Chicken"
				slogan="Cluckin' Good Flavors!"
				dishes={getChickenMenu()}/>
		</article>
	);
};

export default Chicken;
