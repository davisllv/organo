import { useState } from "react";
import Card from "../Card";
import "./time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ valores, listaColadoradores, onDelete, onChange }) => {
  const [corPrimaria, setCorPrimaria] = useState(valores.cor);
  return (
    listaColadoradores &&
    listaColadoradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(corPrimaria, 0.4),
        }}
      >
        <h3 style={{ borderColor: `${corPrimaria}` }}>{valores.nome}</h3>

        <input
          type="color"
          defaultValue={corPrimaria}
          className="input-color"
          onChange={(ev) => setCorPrimaria(ev.target.value)}
        />

        <div className="cards">
          {listaColadoradores.map((col) => {
            return (
              <Card
                key={col.id}
                user={col}
                corPrimaria={corPrimaria}
                onDelete={onDelete}
                onChange={onChange}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
