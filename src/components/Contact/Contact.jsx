import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ dude, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactList}>
        <li>
          <FaUser /> {dude.name}
        </li>
        <li>
          <FaPhoneAlt /> {dude.number}
        </li>
      </ul>
      <button onClick={() => onDelete(dude.id)}>Delete</button>
    </div>
  );
}
