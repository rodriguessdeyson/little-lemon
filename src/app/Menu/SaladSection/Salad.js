import { getSaladMenu } from "../../../api/MenuAPI";
import Category from "../components/CategorySection/Category";

const Salad = () => {
	return (
		<article>
			<Category
				category="Salads"
				slogan="Feeling healthyish today?"
				dishes={getSaladMenu()}/>
		</article>
	);
};

export default Salad;
