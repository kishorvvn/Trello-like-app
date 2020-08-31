import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import data from "./sampleData";
import Home from "./components/pages/Home";

class App extends React.Component {
  // set initial state of the component
  state = {
    boards: []
  };

  // initial state after the component is loaded via lifecycle hoock
  componentDidMount() {
    //
    this.setState({ boards: data.boards });
  }
  // method to create new board
  // state is not changed directly, instead use previous state and merge it with new using spread operator(...)
  createNewBoard = board => {
    this.setState({ boards: [...this.state.boards, board] });
  };

  render() {
    return (
      <div className="App">
        {/* pass state of boards as props one level down to Home component */}
        {/* pass createNewBoard() method as a props down to the home component */}
        <Home boards={this.state.boards} createNewBoard={this.createNewBoard} />
        <Board />
      </div>
    );
  }
}

export default App;
