// CSS
import './App.css'

// Components
import StartScreen from './components/StartScreen'
import EndGame from './components/EndGame'
import Game from './components/Game'

// Data
import { wordsList } from './data/words.js'

// Hooks
import { useCallback, useEffect, useState } from 'react'

function App() {
  // Application stages
  const stages = [
    { id: 1, stage: 'start' },
    { id: 2, stage: 'game' },
    { id: 3, stage: 'end-game' }
  ]

  // Start the game
  const startGame = useCallback(() => {
    setWrongWords([])
    setGuessedLetters([])

    const [categoryRandom, wordRandom] = processWordAndCategory()

    let lettersCount = wordRandom.split('')

    setCategory(categoryRandom)
    setWord(wordRandom)
    setLetters(lettersCount)
    setGameStage(stages[1].stage)
  }, [])

  // Restart the game
  const retryGame = () => {
    setScore(0)
    setAttempts(3)

    setGameStage(stages[0].stage)
  }

  // Initial screen
  const [gameStage, setGameStage] = useState(stages[0].stage)

  // Random words
  const [wordsListGame] = useState(wordsList)

  // States needed for the Game page
  const [category, setCategory] = useState('')
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState([])
  const [score, setScore] = useState(0)
  const [wrongWords, setWrongWords] = useState([])
  const [attempts, setAttempts] = useState(3)
  const [guessedLetters, setGuessedLetters] = useState([])

  // Monitor attempts and show game over if zero
  useEffect(() => {
    if (attempts === 0) {
      setGameStage(stages[2].stage)
    }
  }, [attempts])

  // Monitor guessed letters to update the score
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if (gameStage === 'game') {
      if (uniqueLetters.length === guessedLetters.length) {
        setScore((currentScore) => currentScore + 100)
        startGame()
      }
    }
  }, [guessedLetters, letters, startGame, gameStage])

  // Set categories, words, and letters
  const processWordAndCategory = () => {
    const categories = Object.keys(wordsListGame)
    const categoryRandom = categories[Math.floor(Math.random() * categories.length)]

    const wordsOfCategory = wordsListGame[categoryRandom]
    const wordRandom = wordsOfCategory[Math.floor(Math.random() * wordsOfCategory.length)].toLowerCase()

    return [categoryRandom, wordRandom]
  }

  // Process the word
  const processWord = (letter) => {
    const inputLetter = letter.toLowerCase()

    if (
      guessedLetters.includes(inputLetter) ||
      wrongWords.includes(inputLetter)
    ) {
      return;
    }

    if (letters.includes(inputLetter)) {
      setGuessedLetters((array1) => {
        return [...array1, inputLetter]
      })
    } else {
      setWrongWords((array2) => {
        return [...array2, inputLetter]
      })

      setAttempts((currentAttempts) => currentAttempts - 1)
    }
  }

  return (
    <div className='app-container'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}

      {gameStage === 'game' &&
        <Game
          processWord={processWord}
          category={category}
          letters={letters}
          score={score}
          wrongsLetters={wrongWords}
          attempts={attempts}
          guessedLetters={guessedLetters}
          word={word}
        />}

      {gameStage === 'end-game' && <EndGame retryGame={retryGame} score={score} />}
    </div>
  )
}

export default App
