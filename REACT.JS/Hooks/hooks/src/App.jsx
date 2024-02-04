import "./App.css";
import HookUseCallback from "./components/HookUseCallback";
import HookUseEffect from "./components/HookUseEffect";
import HookUseReducer from "./components/HookUseReducer";
import HookUseRef from "./components/HookUseRef";

function App() {
  return (
    <>
      <HookUseReducer />
      <hr />
      <HookUseEffect />
      <hr />
      <HookUseRef />
      <hr />
      <HookUseCallback />
    </>
  );
}

export default App;
