import { useRef, useState } from "react";

const HookUseRef = () => {
  const inputName = useRef();

  const [valueName, SetValueName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valueName === "red") {
      inputName.current.style.backgroundColor = "red";
    } else if (valueName === "yellow") {
      inputName.current.style.backgroundColor = "yellow";
    } else if (valueName === "green") {
      inputName.current.style.backgroundColor = "green";
    } else {
      inputName.current.style.backgroundColor = "gray";
    }

    SetValueName("");

    inputName.current.focus();
  };

  return (
    <div>
      <h1>UseRef</h1>
      <form onSubmit={handleSubmit}>
        <p>Cor da borda</p>
        <input
          type="text"
          ref={inputName}
          onChange={(e) => SetValueName(e.target.value)}
          value={valueName}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default HookUseRef;
