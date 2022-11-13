import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super(); //calling constructor of extended class here Component
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("Render method");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      //console.log("Inside Filtered Monsters", monster.name, searchField);
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })} */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
