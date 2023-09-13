import "./styles.css";

function Select(props) {
  return (
    <div className="box-select">
      <div>
        <span>{props.label}</span>
      </div>

      <div>
        <select name={props.name} className="select-suspenso">
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
