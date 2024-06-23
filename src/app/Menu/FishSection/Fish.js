import { getSeafoodMenu } from "../../../api/MenuAPI";
import Category from "../components/CategorySection/Category";

const Salad = () => {
	return (
		<article>
			<Category
				category="Seafood"
				slogan="Dive into Deliciousness!"
				dishes={getSeafoodMenu()}/>
		</article>
	);
};

export default Salad;
