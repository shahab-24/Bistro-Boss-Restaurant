import { Helmet } from "react-helmet";
import Featured from "../Shared/Featured";
import PopularMenu from "../Shared/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import Testimonials from "./Testimonials";


const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Home</title>
			</Helmet>
		<Banner></Banner>
		<div className="my-20">
			<Category></Category>
		</div>
		<section>
			<PopularMenu></PopularMenu>
		</section>
		<Featured></Featured>
		<Testimonials></Testimonials>
		</div>
	);
};

export default Home;