import Card from "../Card";
import "./time.css";

const Time = (props) => {
  const { valores } = props;
  return (
    <section
      className="time"
      style={{ backgroundColor: valores.corSecundaria }}
    >
      <h3 style={{ borderColor: `${valores.corPrimaria}` }}>{valores.nome}</h3>

      <div className="cards">
        {props.listaColadoradores
          .filter((col) => col.time === valores.value)
          .map((col) => {
            return <Card user={col} />;
          })}
      </div>
    </section>
  );
};

export default Time;
