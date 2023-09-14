import "./styles.css";

const InputTexto = (props) => {
  return (
    <div className="box-principal">
      <div className="box-label">
        <span>{props.label}</span>
      </div>
      <div className="box-input">
        <input
          value={props.valor}
          required={props.required}
          name={props.name}
          placeholder={props.placeholder}
          onChange={(ev) => props.handleAoDigitar(ev.target.value)}
        />
      </div>
    </div>
  );
};

export default InputTexto;
