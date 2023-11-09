import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
    const [loding,setLoding] = useState(true)

    const createUser =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
   const login =(email,password)=>{
    setLoding(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=>{
    setLoding(true)
        return signOut(auth)
   }

   const google = ()=>{
    setLoding(true)
    return signInWithPopup(auth,googleProvider)
   }

   useEffect(()=>{
    onAuthStateChanged(auth,currentUser =>{
        console.log("current",currentUser);
        setUser(currentUser)
        setLoding(false);
       
    })
},[])
const authinfo={
    user,
    createUser,
    login,
    logOut,
    loding,
    google
}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;