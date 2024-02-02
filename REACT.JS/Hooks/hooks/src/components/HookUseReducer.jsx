import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state) => {
    return Math.random(state);
  });

  const inicialState = [
    { id: 213213, description: "Estudar progamação" },
    { id: 211113, description: "Fazer janta" },
  ];

  const reducerTask = (state, action) => {
    let newTask = {};
    switch (action.type) {
      case "ADD":
        newTask = {
          id: Math.random(),
          description: newText,
        };
        setNewText("");
        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [newText, setNewText] = useState("");

  const [tasks, dispatchTask] = useReducer(reducerTask, inicialState);

  const removeTask = (id) => {
    dispatchTask({ type: "DELETE", id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTask({ type: "ADD" });
  };

  return (
    <div>
      <h1>useReducer Simples</h1>
      <p>Number = {number}</p>
      <button onClick={dispatch}>Sortear um número</button>
      <hr />
      <h1>useReducer Avançado</h1>
      <p>Lista de tarefas:</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
            {task.description}
          </li>
        ))}
      </ul>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setNewText(e.target.value)}
          value={newText}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default HookUseReducer;
