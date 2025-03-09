import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  
  return (
    <div>
      <h2>
        Hi, welcome
        <span className="text-primary text-3xl font-semiBold">  {user?.displayName ? user?.displayName : "Back !"}</span>
      </h2>
    </div>
  );
};

export default UserHome;
