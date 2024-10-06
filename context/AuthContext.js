
'use client'
import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'
import { doc, getDoc, collection, getDocs} from 'firebase/firestore'
import "firebase/firestore";

import React, { useContext, useState, useEffect } from 'react'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [notes, setNotes] = useState([])


    // AUTH HANDLERS
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setCurrentUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
               
                // Set the user to our local context state
                setLoading(true)
                setCurrentUser(user)
                if (!user) {
                    console.log('No User Found')
                    return
                }

                console.log('Fetching Prompt Data')                      
                const notesRef = collection(db, 'users', user.uid, 'notes')
                const querySnapshot1 = await getDocs(notesRef)
                const list = querySnapshot1.docs.map(doc =>{               
                   return {id: doc.id, ...doc.data()}                       
                })
                console.log('Found Notes ', list)
                setNotes(list)
   
                       
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        })    
        return unsubscribe
    }, [])
    const value = {
        currentUser,
        notes,
        setNotes,
        signup,
        logout,
        login,
        loading,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}