import { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  console.log("Render");

  const [searchField, setSearchField] = useState(""); // will return two values [value, setValue]
  console.log(searchField);

  const onSearchChange = (event) => {
    console.log(event.target.value);

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
    </div>
  );
  // constructor() {
  //   console.log("constructor");
  //   super(); //calling constructor of extended class here Component
  //   this.state = {
  //     monsters: [],
  //     searchField: "",
  //   };
  // }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) =>
  //       this.setState(
  //         () => {
  //           return { monsters: users };
  //         }
  //         // () => {
  //         //   console.log("--------------", users.id);
  //         //   console.log(this.state);
  //         // }
  //       )
  //     );
  // }
  // render() {
  //   console.log("Render method");
  //   const { monsters, searchField } = this.state;
  //   const { onSearchChange } = this;
  //   const filteredMonsters = monsters.filter((monster) => {
  //     //console.log("Inside Filtered Monsters", monster.id);
  //     return monster.name.toLocaleLowerCase().includes(searchField);
  //   });
  //   return (
  //
  //       {/* {filteredMonsters.map((monster) => {
  //         return (
  //           <div key={monster.id}>
  //             <h1> {monster.name}</h1>
  //           </div>
  //         );
  //       })} */}
  //       <CardList monsters={filteredMonsters} />
  //     </div>
  //   );
  // }
};

export default App;
