import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchInput } from "./components/search-input/search-input.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://api.jikan.moe/v3/anime/21/characters_staff")
      .then((response) => response.json())
      .then((characters) =>
        this.setState({ characters: characters["characters"] })
      );
  }
  handleChange = (e) => this.setState({ searchField: e.target.value });
  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>One Piece Characters</h1>
        <SearchInput
          placeholder="Search Characters"
          handleChange={this.handleChange}
        ></SearchInput>
        <CardList characters={filteredCharacters}></CardList>
      </div>
    );
  }
}

export default App;
