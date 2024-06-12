import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css["contact-search"]}>
      <p className={css["contact-search-title"]}>Find contacts by name</p>
      <input
        type="text"
        className={css["contact-search-input"]}
        value={value}
        onChange={() => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
