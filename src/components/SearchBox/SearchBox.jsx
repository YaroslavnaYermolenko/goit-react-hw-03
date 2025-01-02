//import * as Yup from "yup";
import css from "./SearchBox.module.css";

export default function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={css.searchBox}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={inputValue ?? "Enter name to search"}
        onChange={(e) => handleChange(e.target.value)}
        className={css.searchInput}
      ></input>
    </div>
  );
}
