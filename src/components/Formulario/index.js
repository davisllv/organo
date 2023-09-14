import { useState } from "react";
import "./styles.css";
import InputTexto from "../InputTexto";
import Select from "../Select";
import Botao from "../Botao";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Form foi Submitido");
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
