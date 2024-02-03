import { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("Sem depêndencia: Estou sendo executado");
  }); // Irá executar toda vez que alguma coisa do componente mudar

  const [number, setNumber] = useState(1);

  const increaseNumber = () => {
    return setNumber(number + 1);
  };

  //

  useEffect(
    () => console.log("Com array vazio, sou executado apenas 1 vez"),
    []
  ); // Irá executar apenas uma vez, quando o componente for renderizado

  //

  const [redNumber, setRedNumber] = useState(0);

  useEffect(() => {
    if (redNumber > 0) {
      console.log(
        "Com depêndecia definida, sou executado apenas quando a depêndencia é alterada"
      );
    }
  }, [redNumber]);

  return (
    <div>
      <h1>useEffect sem depêndencia</h1>
      <p>Number = {number}</p>
      <button onClick={increaseNumber}>Aumentar number</button>
      <hr />
      <h1>useEffect com depêndencia</h1>
      <p>
        Number = <span style={{ color: "red" }}>{redNumber}</span>
      </p>
      <button onClick={() => setRedNumber(redNumber + 1)}>
        Aumentar Rednumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
