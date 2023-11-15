import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = ()=>{

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // clean all function in progress, deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if(cancelled){
            return;
        }
    }

}