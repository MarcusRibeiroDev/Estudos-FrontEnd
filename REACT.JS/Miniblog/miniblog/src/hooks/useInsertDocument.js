import { db } from '../firebase/config' // Import necessário para o firebase
import { useState, useEffect,useReducer } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const initialState = {

}

// PAREI NA ULTIMA AULA PARA ENTENDE O HOOK USEREDUCER