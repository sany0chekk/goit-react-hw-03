import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css["contact-item"]}>
      <div className={css["contact-content"]}>
        <p className={`${css["contact-item-text"]} ${css["contact-name"]}`}>
          <FaUser /> {name}
        </p>
        <p className={`${css["contact-item-text"]} ${css["contact-number"]}`}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button
        className={css["contact-remove-btn"]}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
