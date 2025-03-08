import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
        const {user} = useAuth()
        return (
                <div>
                <h2>Hi, Welcome 
                <span>
                        {user?.displayName ? user?.displayName : 'Back'}
                </span></h2>
                        
                </div>
        );
};

export default AdminHome;