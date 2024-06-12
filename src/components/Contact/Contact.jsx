import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.content}>
        <p className={`${css.text} ${css.name}`}>
          <FaUser /> {name}
        </p>
        <p className={`${css.text} ${css.number}`}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
