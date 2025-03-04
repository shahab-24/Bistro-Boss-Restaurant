import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + currentValue.price ,0)

    const handleDelete=(id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              })

                    }
                })
                
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
    }
    return (
        <div>
        <div className="
        flex justify-evenly mt-4 bg-orange-400 text-white p-2 my-6">
        <h2 className="text-4xl">Items :{cart.length} </h2>
        <h2 className="text-4xl">Total Price :{totalPrice} </h2>
        {cart.length ? <Link to='/dashboard/payment'>
        <button className="btn btn-error">Pay</button>
        </Link> :<button disabled className="btn btn-error">Pay</button> }
        </div>

        {/* table content */}
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-2xl font-semibold">
        <th>
          No
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, idx )=> 
                <tr key={item._id}>
                <th>
                {idx +1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                
                     
                    </div>
                  </div>
                </td>
                <td>
                 {item.name}
                </td>
                <td>$ {item.price}</td>
                <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaTrash></FaTrash></button>
                </th>
              </tr>
            )
        }
      

     
    </tbody>
    
  </table>
</div>
        </div>
            
        </div>
    );
};

export default Cart;