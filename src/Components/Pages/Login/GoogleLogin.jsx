import { useContext } from 'react';
import icon from '../../../assets/g-icon.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';



const GoogleLogin = () => {
const {handleGoogleLogin} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        handleGoogleLogin()
        .then(res => {
            console.log(res.user);
            Swal.fire({
                title: 'successfully login',
                icon: 'success',
                confirmButtonText: 'cool'
            })
            navigate(location?.state ? location.state : '/')
        })
        .catch(err =>{
            console.log(err.message)
            Swal.fire({
                title: 'Login failed',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        })
    }

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline text-white"
                type="submit"
                data-ripple-dark="true"
            >
                <img src={icon} alt="metamask" className="h-6 w-6" />
                Signin with Google
            </button>
        </div>
    );
};

export default GoogleLogin;