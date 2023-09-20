import "./index.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import { useState } from "react";
import Rodape from "./components/Rodape";

function App() {
  const [listaDados, setListaDados] = useState([
    {
      id: 1,
      nome: "Davi da Silva dos Santos",
      time: "frontEnd",
      imagem: "https://github.com/davisllv.png",
    },
  ]);

  const [times, setTimes] = useState([
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
  ]);

  const handleSubmit = (data) => {
    if (!data) return;

    setListaDados((prevState) => {
      return [...prevState, data];
    });
  };

  const handleDeletar = (valor) => {
    const newList = listaDados.filter((dado) => dado.id !== valor.id);

    setListaDados(newList);
  };

  const handleChangeColor = (valor, valores) => {
    const novaLista = times.map((time) => {
      if (time.value === valores.value) {
        time.corPrimaria = valor;
      }

      return time;
    });
    setTimes(novaLista);
  };

  return (
    <div className="App">
      <Banner />

      <Formulario handleSubmit={handleSubmit} times={times} />

      {times.map((time) => (
        <Time
          key={time.nome}
          valores={time}
          listaColadoradores={listaDados.filter(
            (dado) => dado.time === time.value
          )}
          onClick={handleDeletar}
          onChangeColor={handleChangeColor}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
