import { useReducer } from "react";

const UseReducerHook = () => {

    const reducer = (state, action)=> {
        switch(action.type){
            case 'Increment':
                return {...state, count: state.count + 1}
            case 'Text':
                return {...state, text: !state.text}
            default:
                return state
        }
    } 

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: true
    }) // state é referente a todos os states passados como parâmetro e o dispatch serve para mandar a action do que fazer

    const handleButton = ()=>{
        dispatch({type: 'Increment'})
        dispatch({type: 'Text'})
    }

    const countValue = state ? state.count : 0;
    const textValue = state ? state.text : false;

  return (
    <div>

        <h1>useReducer</h1>

        <p>Count: {countValue}</p>

        {textValue && (
            <>
                <p>Texto aparecendo...</p>
            </>
        )}

        <button onClick={handleButton}>Realizar</button>
    </div>
  )
}

export default UseReducerHook