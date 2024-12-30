import MenuItem from "../../Components/MenuItem";
import Cover from "./Cover";


const MenuCategory = ({items,title,coverImg}) => {
	return (
		<div className="">
			{title && <Cover bgImage={coverImg} title={title}></Cover>}
			
			<div className="grid md:grid-cols-2 gap-10 my-10">
				{
					items.map(item =><MenuItem key="item._id" item={item} title={title}></MenuItem>)
				}
			</div>
		</div>
	);
};

export default MenuCategory;