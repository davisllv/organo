import "./index.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
  const [listaDados, setListaDados] = useState([]);
  const handleSubmit = (data) => {
    console.log("data", data);
    if (!data) return;

    setListaDados((prevState) => {
      return [...prevState, data];
    });
  };
  return (
    <div className="App">
      <Banner />

      <Formulario handleSubmit={handleSubmit} />

      {listaDados &&
        listaDados.map((dado) => {
          return <h1>{dado.nome}</h1>;
        })}
    </div>
  );
}

export default App;
