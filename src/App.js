// import components
import { useState } from "react";

import Search from "./components/Search/Search.component";
import Card from "./components/Card/Card.component";
import "./App.css";
// import fonts
import "./fonts/ShadowsIntoLight-Regular.ttf";
// creating functional components

const App = () => {
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (event) => {
    const searcFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searcFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <Search
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monster"
      />
      <Card />
    </div>
  );
};
export default App;
