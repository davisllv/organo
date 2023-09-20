import "./styles.css";

const Input = ({
  type = "text",
  label,
  valor,
  required,
  name,
  placeholder,
  handleAoDigitar,
}) => {
  return (
    <div className="box-principal">
      <div className="box-label">
        <span>{label}</span>
      </div>
      <div className="box-input">
        <input
          style={{ padding: type !== "color" ? "1rem" : 0 }}
          type={type}
          value={valor}
          required={required}
          name={name}
          placeholder={placeholder}
          onChange={(ev) => handleAoDigitar(ev.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
