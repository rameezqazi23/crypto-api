import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../Firebase/Firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';





const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(db, 'users', email), {
            bookmarks: [],
        })
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const userSignOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("Firebase current user==>", currentUser)
        })

        return () => unSubscribe();
    }, [])


    return (
        <UserContext.Provider value={{ createUser, user, userSignIn, userSignOut }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}




