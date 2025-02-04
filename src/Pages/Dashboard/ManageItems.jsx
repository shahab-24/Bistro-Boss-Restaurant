import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
        const [menu] = useMenu()

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
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)}
      
     
    </tbody>
    
  </table>
</div>
                </div>
                        
                </div>
        );
};

export default ManageItems;