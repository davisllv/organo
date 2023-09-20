import "./styles.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = ({ user, corPrimaria, onClick }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="del-button"
        onClick={() => onClick(user)}
      />

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
