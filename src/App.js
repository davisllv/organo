import Banner from "./components/Banner/banner";
import InputTexto from "./components/InputTexto/InputTexto";
import Select from "./components/Select/Select";

function App() {
  return (
    <div className="App">
      <Banner />

      <div className="divisor">
        <h1>Preencha os dados para Criar o Card do Colaborador</h1>
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
      </div>
    </div>
  );
}

export default App;
