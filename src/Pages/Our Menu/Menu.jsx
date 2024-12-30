import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import img from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';

import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from '../Shared/MenuCategory';


const Menu = () => {
	const [menu]= useMenu()
	const desserts = menu.filter(item => item.category === "dessert")
	const salads = menu.filter(item => item.category === "salad")
	const pizzas = menu.filter(item => item.category === "pizza")
	const soups = menu.filter(item => item.category === "soup")
	const offered = menu.filter(item => item.category === "offered")
	return (
		<div>
<Helmet>
	<title>Bistro Boss | Menu</title>
</Helmet>
<Cover bgImage={img} title="Our menu" details='Would You Like To Try A Dish?'></Cover>
<SectionTitle  subHeading={"Don't Miss"} heading={"Today's Offer"}>
</SectionTitle>

{/* todays offer */}
<MenuCategory items={offered} coverImg={dessertImg}></MenuCategory>

{/* dessert section */}
<MenuCategory items={desserts} title={"Dessert"} coverImg={dessertImg}></MenuCategory>

{/* pizza */}
<MenuCategory items={pizzas} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
{/* salad */}
<MenuCategory items={pizzas} title={"salad"} coverImg={saladImg}></MenuCategory>
{/* soup */}
<MenuCategory items={pizzas} title={"soup"} coverImg={soupImg}></MenuCategory>



		</div>
	);
};

export default Menu;