import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css["contact-item"]}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
