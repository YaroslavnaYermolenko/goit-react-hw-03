import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ data, onDelete }) {
  return (
    <div className={css.contacs}>
      {data.map((dude) => (
        <Contact dude={dude} onDelete={onDelete} key={dude.id} />
      ))}
    </div>
  );
}
