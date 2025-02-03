import { useForm } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";

import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
//     console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
//     console.log(res.data);
    if (res.data.success) {

      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Menu Item has been saved",
                showConfirmButton: false,
                timer: 1500
              });
}
    }
   
  };
  return (
    <div className="mt-10">
      <SectionTitle
        heading={"Add Items"}
        subHeading={"What's New"}
      ></SectionTitle>

      {/* form */}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Reciepe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6 mt-6">
            {/* category*/}
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>

              <select
                {...register("category")}
                className="input input-bordered w-full"
              >
                <option value="default" selected>
                  Select A Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* text area */}
          <div className="my-6">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full"
              placeholder="Reciepe Details"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">File input</span>
            </div>

            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </div>
          <button className="btn">
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
