import "./index.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import { useState } from "react";

export const times = [
  {
    nome: "Front-End",
    value: "frontEnd",
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF",
  },
  {
    nome: "Data Sciense",
    value: "dataScience",
    corPrimaria: "#A6D157",
    corSecundaria: "#F0F8E2",
  },
  {
    nome: "Devops",
    value: "devops",
    corPrimaria: "#E06B69",
    corSecundaria: "#FDE7E8",
  },
  {
    nome: "UX e Design",
    value: "uxDesign",
    corPrimaria: "#D86EBF",
    corSecundaria: "#FAE5F5",
  },
  {
    nome: "Mobile",
    value: "mobile",
    corPrimaria: "#FEBA05",
    corSecundaria: "#FFF5D9",
  },
  {
    nome: "Inovação e Gestão",
    value: "inovacao",
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF",
  },
];

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

      {times.map((time) => (
        <Time
          key={time.nome}
          value={time.value}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          listaColadoradores={listaDados}
        />
      ))}
    </div>
  );
}

export default App;
