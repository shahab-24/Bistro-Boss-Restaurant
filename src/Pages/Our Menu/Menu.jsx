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
	const dessert = menu.filter(item => item.category === "dessert")
	const salad = menu.filter(item => item.category === "salad")
	const pizza = menu.filter(item => item.category === "pizza")
	const soup = menu.filter(item => item.category === "soup")
	const offered = menu.filter(item => item.category === "offered")
	const drinks = menu.filter(item => item.category === "drinks")
	const popular = menu.filter(item => item.category === "popular")
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
<MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>

{/* pizza */}
<MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
{/* salad */}
<MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
{/* soup */}
<MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>
<MenuCategory items={drinks} title={"drinks"} coverImg={soupImg}></MenuCategory>
<MenuCategory items={popular} title={"popular"} coverImg={soupImg}></MenuCategory>



		</div>
	);
};

export default Menu;