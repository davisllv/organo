import "./styles.css";

const Card = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={props.user.imagem} alt={props.user.nome} />
      </div>

      <div className="rodape">
        <h4>{props.user.nome}</h4>
        <h5>{props.user.cargo}</h5>
      </div>
    </div>
  );
};

export default Card;
