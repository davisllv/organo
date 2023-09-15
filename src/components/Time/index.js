import Card from "../Card";
import "./time.css";

const Time = ({ valores, listaColadoradores }) => {
  return (
    listaColadoradores &&
    listaColadoradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: valores.corSecundaria }}
      >
        <h3 style={{ borderColor: `${valores.corPrimaria}` }}>
          {valores.nome}
        </h3>

        <div className="cards">
          {listaColadoradores.map((col) => {
            return (
              <Card key={col.id} user={col} corPrimaria={valores.corPrimaria} />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
