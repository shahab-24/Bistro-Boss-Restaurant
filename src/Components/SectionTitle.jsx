
const SectionTitle = ({heading, subHeading}) => {
	return (
		<div className="md:w-4/12 mx-auto text-center">
			<p className="text-yellow-500 text-xl">---{subHeading}---</p>
			<h3 className="uppercase text-3xl border-y-2 border-sky-500 py-3 my-4">{heading}</h3>
			
		</div>
	);
};

export default SectionTitle;