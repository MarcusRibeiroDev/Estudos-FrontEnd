import FirstComponent from './FirstComponents'
import TemplateEx from './TemplateExpressions'
import EventClick from './EventClick'
import Challenge from './Challenge'
import './App.css'

function App() {

  return (
    <div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FirstComponent/>
      <TemplateEx/>
      <EventClick/>
      <Challenge/>
    </div>
  )
}

export default App
