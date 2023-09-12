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

  const stages = [
    {id: 1, stage: 'start'},
    {id: 2, stage: 'game'},
    {id: 3, stage: 'end-game'}
  ]

  const [gameStage, setGameStage] = useState(stages[0].stage)

  const [words] = useState(wordsList)

  // Começar o game
  const startGame = ()=> {
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

  return (
    <div className='app-container'>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <Game processWord={processWord} />}
        {gameStage === 'end-game' && <EndGame retryGame={retryGame} />}
    </div>
  )
}

export default App
