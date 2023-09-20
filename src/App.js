import "./index.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import { useState } from "react";
import Rodape from "./components/Rodape";
import { v4 } from "uuid";

function App() {
  const [listaDados, setListaDados] = useState([
    {
      id: v4(),
      nome: "Davi da Silva dos Santos",
      time: "frontEnd",
      imagem: "https://github.com/davisllv.png",
    },
    {
      id: v4(),
      nome: "Arthur Nascimento",
      time: "dataScience",
      imagem: "https://github.com/ArthurNas.png",
    },
  ]);

  const times = [
    {
      id: v4(),
      nome: "Front-End",
      value: "frontEnd",
      cor: "#82CFFA",
    },
    {
      id: v4(),
      nome: "Data Sciense",
      value: "dataScience",
      cor: "#A6D157",
    },
    {
      id: v4(),
      nome: "Devops",
      value: "devops",
      cor: "#E06B69",
    },
    {
      id: v4(),
      nome: "UX e Design",
      value: "uxDesign",
      cor: "#D86EBF",
    },
    {
      id: v4(),
      nome: "Mobile",
      value: "mobile",
      cor: "#FEBA05",
    },
    {
      id: v4(),
      nome: "Inovação e Gestão",
      value: "inovacao",
      cor: "#FF8A29",
    },
  ];

  const handleSubmit = (data) => {
    if (!data) return;

    setListaDados((prevState) => {
      return [...prevState, data];
    });
  };

  const handleDeletar = (valor) => {
    setListaDados((prevState) => {
      const newArray = prevState.filter((d) => d.id === valor.id);

      return newArray;
    });
  };

  return (
    <div className="App">
      <Banner />

      <Formulario handleSubmit={handleSubmit} times={times} />

      {times.map((time) => (
        <Time
          key={time.id}
          valores={time}
          listaColadoradores={listaDados.filter(
            (dado) => dado.time === time.value
          )}
          onClick={handleDeletar}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
