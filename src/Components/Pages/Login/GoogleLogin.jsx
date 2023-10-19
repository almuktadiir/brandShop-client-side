import icon from '../../../assets/g-icon.png'

const GoogleLogin = () => {
    const handleGoogleLogin = () => {
        console.log('click');
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
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