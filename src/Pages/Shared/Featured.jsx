import featuredImg from "../../assets/featured.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Featured = () => {
  return (
    <div className="featured-item mx-auto py-10">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="flex gap-6 items-center justify-center py-20 px-36 pt-10">
        <div className="">
          <img className="" src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <p>{new Date().getFullYear()}</p>
          <h3 className="uppercase text-xl">Where can i get some?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            repellat animi quos eveniet, itaque necessitatibus asperiores
            delectus consequatur, ut voluptas accusamus culpa enim, accusantium
            veniam blanditiis maiores recusandae fugiat ex pariatur? In ex sequi
            nemo? Deleniti temporibus amet sit nulla iusto recusandae
            voluptatibus repellendus fugiat reprehenderit quo, exercitationem
            pariatur est.
          </p>
          <button className="btn btn-outline"> Read More.....</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
