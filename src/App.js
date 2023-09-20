import "./index.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import { useState } from "react";
import Rodape from "./components/Rodape";
import { v4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: v4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: v4(),
      nome: "Data Sciense",
      cor: "#A6D157",
    },
    {
      id: v4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: v4(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: v4(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: v4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [listaDados, setListaDados] = useState([
    {
      id: v4(),
      nome: "Davi da Silva dos Santos",
      idTime: times[0].id,
      cargo: "Desenvolvedor",
      imagem: "https://github.com/davisllv.png",
    },
    {
      id: v4(),
      nome: "Arthur Nascimento",
      idTime: times[1].id,
      cargo: "Desenvolvedor",
      imagem: "https://github.com/ArthurNas.png",
    },
  ]);

  const handleSubmit = (data) => {
    if (!data) {
      alert("Dados Incorretos!");
      return;
    }
    data.id = v4();

    setListaDados([...listaDados, data]);

    alert("Colaborador Adicionado com Sucesso!");
  };

  const handleSubmitTeam = (data) => {
    if (!data) {
      alert("Dados Incorretos!");
      return;
    }
    data.id = v4();

    setTimes([...times, data]);
    alert("Time Adicionado com Sucesso!");
  };

  const handleDeletar = (valor) => {
    setListaDados(listaDados.filter((d) => d.id !== valor));
    alert(`Colaborador Removido com Sucesso!`);
  };

  return (
    <div className="App">
      <Banner />

      <Formulario
        handleSubmit={handleSubmit}
        handleSubmitTeam={handleSubmitTeam}
        times={times}
      />

      {times.map((time) => (
        <Time
          key={time.id}
          valores={time}
          listaColadoradores={listaDados.filter(
            (dado) => dado.idTime === time.id
          )}
          onClick={handleDeletar}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
