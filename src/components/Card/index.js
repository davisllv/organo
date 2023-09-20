import "./styles.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Card = ({ user, corPrimaria, onDelete, onChange }) => {
  const handleChange = () => {
    onChange(user.id);
  };

  const propsPadrao = {
    size: 25,
    onClick: handleChange,
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="del-button"
        onClick={() => onDelete(user.id)}
      />

      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={user.imagem} alt={user.nome} />
      </div>

      <div className="rodape">
        <h4>{user.nome}</h4>
        <h5>{user.cargo}</h5>

        <div className="favoritar">
          {user.liked ? (
            <AiFillHeart {...propsPadrao} color="red" />
          ) : (
            <AiOutlineHeart {...propsPadrao} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
