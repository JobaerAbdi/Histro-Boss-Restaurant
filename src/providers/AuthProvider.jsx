import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUserProfile = (name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name , photoURL:photo
          })
    };

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    };

    const googleSignUp = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current user', currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt',{
                    email: currentUser?.email
                })
                .then(data=>{
                    // console.log(data.data);
                    const token = data.data.token
                    localStorage.setItem('access-token', token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        });

        return ()=> {
            return unsubscribe();
        };
    },[]);

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        updateUserProfile,
        logOut,
        googleSignUp
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;