import { db } from '../firebase/config'

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
    const [sucess, setSucess] = useState(null)

    // cleanup
    // clean all function in progress, deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if(cancelled){
            return;
        }
    }

    const createUser = async (data)=>{
        checkIfIsCancelled()

        setLoading(true)

        setError(null)

        setSucess(null)

        try{

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            setSucess(true)

            return user

        }
        catch(error){

            if(error.message.includes('email-already')) {
                setError('Esse email já existe')
            } else if(error.message.includes('invalid-email')) {
                setError('O email digitado é inválido')
            } else if(error.message.includes('password')) {
                setError('Sua senha é muito fraca')
            } else{
                setError('Houve algum problema, tente mais tarde')
            }

            setLoading(false)

            console.log(error.message)
            console.log(typeof error.message)

        }

    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        sucess
    }
}
