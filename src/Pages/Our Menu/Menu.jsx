import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Shared/PopularMenu';

const Menu = () => {
	return (
		<div>
<Helmet>
	<title>Bistro Boss | Menu</title>
</Helmet>
<Cover bgImage={img} title="Our menu" details='Would You Like To Try A Dish?'></Cover>
<PopularMenu></PopularMenu>
		</div>
	);
};

export default Menu;