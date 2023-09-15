import Card from "../Card";
import "./time.css";

const Time = (props) => {
  // Dumb Componente - Componente Estático
  console.log(props);
  console.log();
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: `${props.corPrimaria}` }}>{props.nome}</h3>

      <div className="cards">
        {props.listaColadoradores
          .filter((col) => col.time === props.value)
          .map((col) => {
            return <Card user={col} />;
          })}
      </div>
    </section>
  );
};

export default Time;
