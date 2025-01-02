import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const FoodCard = ({item}) => {
	const {image, price, name,recipe } = item;
  const {user} = useAuth()
  const navigate = useNavigate()

  const handleAddToCart = food => {
    if(user && user.email){

    }else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please Log in to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });

    }
  }
	return (
		<div className="card bg-base-100 w-96 shadow-xl">
			
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className="text-white absolute bg-slate-500 mt-4 ml-80 px-2 font-semibold">{price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4   mt-4 border-orange-400 bg-orange-100">ADD TO CART</button>
    </div>
  </div>
</div>
	);
};

export default FoodCard;