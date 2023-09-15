// CSS
import './App.css'

// Componentes
import StartScreen from './components/StartScreen'
import EndGame from './components/EndGame'
import Game from './components/Game'

// Data
import {wordsList} from './data/words.js'

// Hooks
import { useCallback, useEffect, useState } from 'react'

function App() {

  // Estágios da aplicação
  const stages = [
    {id: 1, stage: 'start'},
    {id: 2, stage: 'game'},
    {id: 3, stage: 'end-game'}
  ]

  // Começar o game
  const startGame = ()=> {
    const [categoryRandom, wordRandom] = processWordAndCategory()

    const lettersCount = wordRandom.split('')

    console.log(categoryRandom)
    console.log(wordRandom)
    console.log(lettersCount)

    setCategory(categoryRandom)
    setWord(wordRandom)
    setLetters(lettersCount)

    setGameStage(stages[1].stage)
  }

  // Processar palavra
  const processWord = ()=> {
    setGameStage(stages[2].stage)
  }

  // Finalizar e reiniciar game
  const retryGame = ()=> {
    setGameStage(stages[0].stage)
  }

  const [gameStage, setGameStage] = useState(stages[0].stage)

  // Palavras aleatórias
  const [wordsListGame] = useState(wordsList)

  // Selecionando categorias, palavras e letras
  const [category, setCategory] = useState('')
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState('')

  // Setando categorias, palavras e letras
  const processWordAndCategory = ()=> {
    const categories = Object.keys(wordsListGame) 
    const categoryRandom = categories[Math.floor(Math.random() * categories.length)]

    const wordsOfCategory = wordsListGame[categoryRandom]
    const wordRandom = wordsOfCategory[Math.floor(Math.random() * wordsOfCategory.length)].toLowerCase()

    return [categoryRandom, wordRandom]
  }

  return (
    <div className='app-container'>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <Game processWord={processWord} />}
        {gameStage === 'end-game' && <EndGame retryGame={retryGame} />}
    </div>
  )
}

export default App
