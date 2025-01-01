import { Link } from "react-router-dom";
import MenuItem from "../../Components/MenuItem";
import Cover from "./Cover";


const MenuCategory = ({items,title,coverImg}) => {
	return (
		<div className="my-10">
			{title && <Cover bgImage={coverImg} title={title}></Cover>}
			
			<div className="grid md:grid-cols-2 gap-10 my-10">
				{
					items.map(item =><MenuItem key="item._id" item={item} title={title}></MenuItem>)
				}
			</div>
			<Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-white  mt-4"> Order Now</button></Link>
		</div>
	);
};

export default MenuCategory;