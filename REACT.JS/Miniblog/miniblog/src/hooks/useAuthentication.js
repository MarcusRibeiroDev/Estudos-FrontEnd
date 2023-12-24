import { db } from '../firebase/config.js'  // Para o firebase entender que estamos o utilizando

import {
    getAuth,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import { useEffect, useState } from 'react'

export const useAuthentication = ()=>{
    const auth = getAuth()

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [sucess, setSucess] = useState(null)


    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const memoryLeak = ()=>{
        if(cancelled){
            return
        }
    }

    const createUser = async (data)=>{

        memoryLeak()

        setSucess(null)
        setLoading(true)
        setError(null)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setSucess(true)
            setLoading(false)

            return user

        } catch(error){
            let systemError

            if(error.message.includes('email-already')){
                systemError = 'Esse usuário já está cadastrado'
            } else if(error.message.includes("Password")){
                systemError = 'Essa senha é fraca'
            } else {
                systemError = 'Erro de servidor'
            }

            setError(systemError)
        }

        setLoading(false)
    }

    useEffect(()=>{
        return () => setCancelled(true)
    }, [])

    return {
        createUser,
        loading,
        error,
        sucess,
        auth
    }
}

