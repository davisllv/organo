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
          className="select-suspenso"
        >
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.descricao}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Select;
