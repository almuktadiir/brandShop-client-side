import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useState } from "react";


const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = () => {
    const [user, setUser] = useState({});


    const authInfo = {
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;