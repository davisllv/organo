import "./styles.css";
import InputTexto from "../InputTexto";
import Select from "../Select";
import Botao from "../Botao";

const Formulario = () => {
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
        />
        <InputTexto
          label="Cargo"
          required
          placeholder="Digite seu cargo"
          name="cargo"
        />
        <InputTexto
          label="Image"
          placeholder="Informe Endereço da Sua Image"
          name="imagem"
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
