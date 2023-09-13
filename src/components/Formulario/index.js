import "./styles.css";
import InputTexto from "../InputTexto";
import Select from "../Select";
import Botao from "../Botao";

const Formulario = () => {
  return (
    <section className="divisor">
      <h1>Preencha os Dados para Criar o Card do Colaborador</h1>
      <form className="formulario">
        <InputTexto label="Nome" placeholder="Digite seu nome" name="nome" />
        <InputTexto label="Cargo" placeholder="Digite seu cargo" name="cargo" />
        <InputTexto
          label="Image"
          placeholder="Informe Endereço da Sua Image"
          name="imagem"
        />

        <Select
          name="time"
          label="Time"
          options={[
            { value: "gremio", descricao: "Grêmio" },
            { value: "inter", descricao: "Inter" },
          ]}
        />

        <Botao label={"Criar Card"} />
      </form>
    </section>
  );
};

export default Formulario;
