import useCart from "../../hooks/useCart";

const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + currentValue.price ,0)
    return (
        <div>
        <div className="
        flex justify-evenly mt-4 bg-orange-400 text-white p-2">
        <h2 className="text-4xl">Items :{cart.length} </h2>
        <h2 className="text-4xl">Total Price :{totalPrice} </h2>
        <button className="btn btn-error">Pay</button>
        </div>

        {/* table content */}
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
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
                      <div className="font-bold">Hart Hagerty</div>
                     
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            )
        }
      {/* row 1 */}

     
    </tbody>
    
  </table>
</div>
        </div>
            
        </div>
    );
};

export default Cart;