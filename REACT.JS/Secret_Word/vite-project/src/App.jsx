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

    setCategory(categoryRandom)
    setWord(wordRandom)
    setLetters(lettersCount)

    console.log(lettersCount)

    setGameStage(stages[1].stage)
  }

  // Reiniciar o game
  const retryGame = ()=> {
    setScore(0)
    setAttempts(5)
    setWrongsWords([])
    setGuessedLetters([])

    setGameStage(stages[0].stage)
  }

  // Tela inicial
  const [gameStage, setGameStage] = useState(stages[0].stage)

  // Palavras aleatórias
  const [wordsListGame] = useState(wordsList)

  // States necessários para usar na página Game
  const [category, setCategory] = useState('')
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState([])
  const [score, setScore] = useState(0)
  const [wrongsLetters, setWrongsWords] = useState([])
  const [attempts, setAttempts] = useState(5)
  const [guessedLetters, setGuessedLetters] = useState([])

  // Monitorar as tentativas caso zere mostre game over
  useEffect(()=> {
    if(attempts < 1){
      setGameStage(stages[2].stage)
    }
  }, [attempts, stages])

  // Monitorar as letras acertadas para somar os pontos
  useEffect(()=>{

    const uniqueLetters = [...new Set(letters)]

    if(uniqueLetters.length === guessedLetters.length){
        setScore((score)=> score += 100)
    }

  }, [guessedLetters, letters]) // *************************************************************CONTINUAR DAQUI, USAR OS CALLBACKS E RENDRIZAR UMA NOVA PALAVRA

  // Setando categorias, palavras e letras
  const processWordAndCategory = ()=> {
    const categories = Object.keys(wordsListGame) 
    const categoryRandom = categories[Math.floor(Math.random() * categories.length)]

    const wordsOfCategory = wordsListGame[categoryRandom]
    const wordRandom = wordsOfCategory[Math.floor(Math.random() * wordsOfCategory.length)].toLowerCase()

    return [categoryRandom, wordRandom]
  }

      // Processar a palavra
      const processWord = (letter)=> {
        const inputLetter = letter.toLowerCase()

        console.log(inputLetter) 

        if (
          guessedLetters.includes(inputLetter) ||
          wrongsLetters.includes(inputLetter)
      ) {
          return;
      }

        if(letters.includes(inputLetter)){

            setGuessedLetters((array)=>{
              return [...array, inputLetter]
            })

          
        } else {

            setWrongsWords((array) =>{
              return [...array, inputLetter]
            })


            setAttempts(attempts - 1)
        }

    }

  return (
    <div className='app-container'>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}

        {gameStage === 'game' &&
        <Game
            processWord={processWord}
            category={category}
            letters={letters}
            score={score}
            wrongsLetters={wrongsLetters}
            attempts={attempts}
            guessedLetters={guessedLetters}
        />}

        {gameStage === 'end-game' && <EndGame retryGame={retryGame} score={score}/>}
    </div>
  )
}

export default App
