import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Components/MenuItem";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {
	const [menu] = useMenu()
	const  popularItems = menu.filter(item => item.category === "popular")
	
	// const [menu,setMenu] = useState([])
	// useEffect(() => {
	// 	fetch('/menu.json')
	// 	.then(res => res.json())
	// 	.then(data =>{
	// 		const popularItems = data.filter(item => item.category === "popular")
	// 		setMenu(popularItems)
	// 	} )
		
	// },[])
	return (
		<div>
			<SectionTitle
			
			subHeading="From Our Menu"
			heading="Popular Items">

			</SectionTitle>
			<div className="grid md:grid-cols-2 gap-10 my-10">
				{
					popularItems.map(item =><MenuItem key="item._id" item={item}></MenuItem>)
				}
			</div>
			
		</div>
	);
};

export default PopularMenu;