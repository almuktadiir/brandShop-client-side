import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

 
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleUserProfile = (name , photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user change from onauthstate', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        handleUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}