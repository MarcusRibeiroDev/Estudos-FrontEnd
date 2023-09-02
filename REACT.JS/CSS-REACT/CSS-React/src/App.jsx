import './App.css'
import MyComponent from './Components/MyComponent'
import SetPlusNumber from './Components/SetPlusNumber'

function App() {

  const n = 5

  return (
    <>
      {/*CSS Global*/}
      <h1>H1 Global</h1>
      <p>P Global</p>
      <hr />

      {/*CSS MyComponent*/}
      <MyComponent />
      <hr />

      {/*CSS Inline*/}
      <h1 style={{color: "green"}}>
        H1 Inline
      </h1>
      <p style={{color: "green"}}>
        P Inline
      </p>
      <hr />

      {/*IF CSS*/}
      <SetPlusNumber />
      <hr />

      {/*IF CSS Classname*/}
      <h1 className={ n === 5 ? "red-h1" : "blue-h1" }>H1 IF CSS Classname</h1>
      <hr />
    </>
  )
}

export default App
