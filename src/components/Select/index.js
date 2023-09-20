import "./styles.css";

function Select(props) {
  return (
    <div className="box-select">
      <div className="box-label">
        <span>{props.label}</span>
      </div>

      <div>
        <select
          required={props.required}
          name={props.name}
          onChange={(evento) => props.handleAlterar(evento.target.value)}
          className="select-suspenso"
        >
          {props.options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.nome}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Select;
