import React, { useEffect, useState } from 'react';
import { AuthContex } from '../context/AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig.init';


const GoogleProvider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInWithGoogle = () => {

        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }


    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);

            console.log('user in the auth change', currentUser)
        })
        return () => {
            unSubscribe()
        }


    }, [])


    const authusers = {
        createUser,
        loading,
        singInUser,
        user,
        signOutUser,
        signInWithGoogle


    }


    return (



        < AuthContex value={authusers} >
            {children}
        </AuthContex >
    );

};

export default Authprovider;