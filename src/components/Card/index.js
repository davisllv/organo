import "./styles.css";

const Card = ({ user, corPrimaria }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={user.imagem} alt={user.nome} />
      </div>

      <div className="rodape">
        <h4>{user.nome}</h4>
        <h5>{user.cargo}</h5>
      </div>
    </div>
  );
};

export default Card;
