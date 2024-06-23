import { getMeatMenu } from "../../../api/MenuAPI";
import Category from "../components/CategorySection/Category";

const Meat = () => {
	return (
		<article>
			<Category
				category="Signature Steaks"
				slogan="Succulent Meats, Unforgettable Flavors"
				dishes={getMeatMenu()}/>
		</article>
	);
};

export default Meat;
