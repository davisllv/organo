import "./index.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
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

      <Time nome={"Programação"} />
    </div>
  );
}

export default App;
