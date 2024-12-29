

const MenuItem = ({item}) => {
	// console.log(items)
	const {image, price, name,recipe } = item
	// console.log(image, price)
	// console.log(item.image)
	return (
		<div className="flex space-x-4">
			<img style={{borderRadius:"0 120px 120px 120px"}}className="w-[120px]" src={image} alt="" />
			<div>
				<h3 className="text-2xl font-semibold">{name}</h3>
				<p>{recipe}</p>
			</div>
			<p>{price}</p>
		</div>
	);
};

export default MenuItem;