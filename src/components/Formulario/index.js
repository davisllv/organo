import { useState } from "react";
import "./styles.css";
import Input from "../Input";
import Select from "../Select";
import Botao from "../Botao";

export function handleCriarId() {
  return `${Math.random().toString(16).slice(2)}-${Math.random()
    .toString(16)
    .slice(2)}`;
}

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [idTime, setIdTime] = useState(props.times[0].id);

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#ffffff");

  const handleSubmit = (evento) => {
    const dados = {
      nome,
      cargo,
      imagem,
      idTime,
    };

    evento.preventDefault();
    props.handleSubmit(dados);

    setNome("");
    setCargo("");
    setImagem("");
    setIdTime(props.times[0].id);
  };

  const handleSubmitTeam = (evento) => {
    const dados = {
      nome: nomeTime,
      cor: corTime,
    };
    evento.preventDefault();
    props.handleSubmitTeam(dados);

    setNomeTime("");
    setCorTime("#ffffff");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <section className="divisor" style={{ width: "45%" }}>
        <h1>Preencha os Dados para Criar o Card do Colaborador</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <Input
            required
            label="Nome"
            placeholder="Digite seu nome"
            name="nome"
            valor={nome}
            handleAoDigitar={(valor) => setNome(valor)}
          />
          <Input
            label="Cargo"
            required
            placeholder="Digite seu cargo"
            name="cargo"
            valor={cargo}
            handleAoDigitar={(valor) => setCargo(valor)}
          />
          <Input
            label="Image"
            placeholder="Informe Endereço da Sua Image"
            name="imagem"
            valor={imagem}
            handleAoDigitar={(valor) => setImagem(valor)}
          />

          <Select
            required
            name="time"
            label="Time"
            handleAlterar={(valor) => setIdTime(valor)}
            options={props.times}
          />

          <Botao>Criar Card</Botao>
        </form>
      </section>

      <section className="divisor" style={{ width: "45%" }}>
        <h1>Preencha os Dados para Criar um Time</h1>
        <form className="formulario" onSubmit={handleSubmitTeam}>
          <Input
            required
            label="Nome do Time"
            placeholder="Digite o nome do Time"
            name="nomeTime"
            valor={nomeTime}
            handleAoDigitar={(valor) => setNomeTime(valor)}
          />

          <Input
            type="color"
            label="Cor"
            name="corTime"
            valor={corTime}
            handleAoDigitar={(valor) => setCorTime(valor)}
          />

          <Botao>Criar Time</Botao>
        </form>
      </section>
    </div>
  );
};

export default Formulario;
