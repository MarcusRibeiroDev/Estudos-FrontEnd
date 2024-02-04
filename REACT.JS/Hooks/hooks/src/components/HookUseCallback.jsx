import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const getItemsFromDB = useCallback(() => {
    return ["a", "b", "c"];
  }, []); // Salva  a funçào na memoria apenas chamando depende do que estiver na depêndencia'

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>UseCallBack</h1>
      <br />
      <List getItems={getItemsFromDB} />
      <br />
      <p>Contador = {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contar</button>
    </div>
  );
};

export default HookUseCallback;
