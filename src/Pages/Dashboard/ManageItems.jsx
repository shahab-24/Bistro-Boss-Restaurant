import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
        const [menu] = useMenu()

        const handleDeleteItem = () => {
                console.log("delete items form manage items")
        }

        const handleUpdateItem = () => {
                console.log('update form manage items page')
        }

        return (
                <div>
                <SectionTitle heading='Manage All Items' subHeading='Hurry UP'></SectionTitle>

                <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {menu.map((item, index) => <tr key={item._id}>
        <th>
          {index + 1}
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
            
          </div>
        </td>
        <td>
          {item.name}
          
        </td>
        <td><button onClick={()=>handleUpdateItem(item)} className="btn btn-ghost btn-lg text-orange-600"><FaEdit></FaEdit></button></td>
        <td>
        <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)}
      
     
    </tbody>
    
  </table>
</div>
                </div>
                        
                </div>
        );
};

export default ManageItems;