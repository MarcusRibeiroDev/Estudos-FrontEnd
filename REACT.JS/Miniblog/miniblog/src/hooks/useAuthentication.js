import { db } from '../firebase/config' // Import necessário para o firebase

import {
    getAuth, // Obtém a instância de autenticação
    createUserWithEmailAndPassword, // Cria um usuário com e-mail e senha
    signInWithEmailAndPassword, // Autentica usuário com e-mail e senha
    updateProfile, // Atualiza o perfil do usuário
    signOut // Faz logout do usuário
} from 'firebase/auth' // Métodos do Firebase

import { useState, useEffect } from 'react'

export const useAuthentication = ()=>{

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [sucess, setSucess] = useState(null)
    const auth = getAuth() // Recupera a informação de quem está altenticado

    // cleanup
    // clean all function in progress, deal with memory leak
    const [cancelled, setCancelled] = useState(false)
    function checkIfIsCancelled() {
        if(cancelled){
            return;
        }
    }

    //Função para fazer login
    const login = async (data)=>{
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password) // Método que faz a autenticação
        }
        catch(error){
            if(error.message.includes('credentials')){
                setError('Credencias são inválidas, reveja o email e senha')
            } else{
                setError('Ocorreu um erro tente novamente mais tarde')
            }

            setLoading(false)
        }
    }

    //Função para logout do usuário
    const logout = ()=>{
        checkIfIsCancelled()
        signOut(auth)
    }

    // Função que cria o usuário
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
            ) // Essa requisição usa o hook "createUserWithEmailAndPassword", que cria um usuário com senha e email no firebase usando dados do "data" que é passado como parâmetro no createUser.

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false) // Cancela o loading após terminar a requisição

            setSucess(true) // Mostra a mensagem de sucesso na tela

            return user // Retorna o usuário criado no firebase

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

            setLoading(false) // Cancela o loading após terminar a requisição
        }

    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    }, []) // Executa uma vez após tudo do hook for processado para garantir que todas funções foram encerradas, ajuda na performance do site

    return {
        auth,
        createUser,
        error,
        loading,
        sucess,
        logout,
        login
    } // Returno de tudo que será útil do hook
}
