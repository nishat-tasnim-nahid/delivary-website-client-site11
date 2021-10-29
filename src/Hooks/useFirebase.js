import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth()
   

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(()=> setIsLoading(false))
    }

    useEffect(() => {
       const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubcribe;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(()=> setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        logOut,
        signInUsingGoogle
    }
}
export default useFirebase;