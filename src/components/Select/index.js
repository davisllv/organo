import "./styles.css";

function Select(props) {
  return (
    <>
      <div>
        <span>{props.label}</span>
      </div>

      <div>
        <select name={props.name}>
          {props.options.map((option) => {
            return <option value={option.value}>{option.descricao}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default Select;
