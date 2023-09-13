import "./styles.css";

const InputTexto = (props) => {
  return (
    <div className="box-principal">
      <div>
        <span>{props.label}</span>
      </div>
      <div className="box-input">
        <input name={props.name} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default InputTexto;
