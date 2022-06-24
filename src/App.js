// import components
import { useState, useEffect } from "react";

import Search from "./components/Search/Search.component";
import Card from "./components/Card/Card.component";
import "./App.css";
// import fonts
import "./fonts/ShadowsIntoLight-Regular.ttf";
// creating functional components

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searcFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searcFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <Search
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monster"
      />
      <Card monsters={filteredMonsters} />
    </div>
  );
};
export default App;
