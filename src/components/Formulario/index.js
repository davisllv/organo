import { useState } from "react";
import "./styles.css";
import InputTexto from "../InputTexto";
import Select from "../Select";
import Botao from "../Botao";

function handleCriarId() {
  return `${Math.random().toString(16).slice(2)}-${Math.random()
    .toString(16)
    .slice(2)}`;
}

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("gremio");

  const handleSubmit = (evento) => {
    const id = handleCriarId();

    const dados = {
      id,
      nome,
      cargo,
      imagem,
      time,
    };
    evento.preventDefault();
    props.handleSubmit(dados);
  };

  return (
    <section className="divisor">
      <h1>Preencha os Dados para Criar o Card do Colaborador</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <InputTexto
          required
          label="Nome"
          placeholder="Digite seu nome"
          name="nome"
          valor={nome}
          handleAoDigitar={(valor) => setNome(valor)}
        />
        <InputTexto
          label="Cargo"
          required
          placeholder="Digite seu cargo"
          name="cargo"
          valor={cargo}
          handleAoDigitar={(valor) => setCargo(valor)}
        />
        <InputTexto
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
          valor={time}
          handleAlterar={(valor) => setTime(valor)}
          options={[
            { value: "gremio", descricao: "Grêmio" },
            { value: "inter", descricao: "Inter" },
          ]}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
