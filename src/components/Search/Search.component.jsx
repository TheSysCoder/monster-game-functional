import "./styles.css";
const Search = (props) => {
  return (
    <div>
      <input
        type="search"
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};
export default Search;
