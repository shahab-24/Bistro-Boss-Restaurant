import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result)
            const userInfo = {
                email: result.user.email,
                name: result.user.displayName
            }

            axiosPublic.post('/users', userInfo)
            .then(result=> {
                console.log(result.user)
                navigate('/')

            })
            
        })
    
    }
    return (
        <div className="p-8">
            <div>
                <div className="divider"></div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-lg">
                    <FaGoogle></FaGoogle>
                    Google</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;