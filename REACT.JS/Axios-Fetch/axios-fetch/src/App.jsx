import { useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  useEffect(() => {
    // Requisião com fetch
    const fetchData = async () => {
      try {
        const response = await fetch("https://example-data.draftbit.com/books");
        const data = await response.json();
        console.log(data); // Aqui você pode ver os dados obtidos
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    // Requisição com axios
    const fetchDataAxios = async () => {
      try {
        const response = await axios.get(
          "https://example-data.draftbit.com/books"
        );
        console.log(response.data); // Aqui você pode ver os dados obtidos
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
    fetchDataAxios();
  }, []);

  return <>Fetch-Axios</>;
}

export default App;
