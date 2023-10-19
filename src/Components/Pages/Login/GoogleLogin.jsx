import icon from '../../../assets/g-icon.png'

const GoogleLogin = () => {
    const handleGoogleLogin = () => {
        console.log('click');
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="flex select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto"
                type="submit"
                data-ripple-dark="true"
            >
                <img src={icon} alt="metamask" className="h-6 w-6" />
                Continue with Google
            </button>
        </div>
    );
};

export default GoogleLogin;