import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>
        Hi, welcome
        <span>{user?.displayName ? user?.dispalyName : "Back"}</span>
      </h2>
    </div>
  );
};

export default UserHome;
