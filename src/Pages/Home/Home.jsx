import PopularMenu from "../Shared/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";


const Home = () => {
	return (
		<div>
		<Banner></Banner>
		<div className="my-20">
			<Category></Category>
		</div>
		<section>
			<PopularMenu></PopularMenu>
		</section>
		</div>
	);
};

export default Home;