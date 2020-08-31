import React from "react";
import List from "./List";
import data from "../sampleData";

class Board extends React.Component {
  // set initial state
  state = {
    currentLists: []
  };
  // setState
  componentDidMount() {
    this.setState({ currentLists: data.lists });
  }
  // to access DOM inputs
  addBoardInput = React.createRef();

  // method to create a new list
  createNewList = e => {
    e.preventDefault();
    console.log(this.addBoardInput.current.value);
    const list = {
      id: Math.random(),
      title: this.addBoardInput.current.value,
      board: 300,
      createdAt: new Date(),
      cards: [
        {
          id: 1,
          text: "Card 1"
        },
        {
          id: 2,
          text: "Card 2"
        }
      ]
    };
    // check if list exists
    if (list.title) {
      // upadate current state
      this.setState({ currentLists: [...this.state.currentLists, list] });
    }
    // reset value of new list input to empty
    this.addBoardInput.current.value = "";
  };

  render() {
    return (
      <div>
        <div className="lists-wrapper">
          {/* button to create a new list */}
          {/* <button onClick={this.createNewList}>Create new list</button> */}
          {/* accessing props data */}
          <h3>
            {Object.keys(this.state.currentLists).map(key => (
              <List
                key={this.state.currentLists[key].id}
                // passing data of list to the List component as a props
                list={this.state.currentLists[key]}
              />
            ))}
          </h3>
        </div>
        <form className="new-list-wrapper" onSubmit={this.createNewList}>
          {/* add ref to access input */}
          <input type="text" ref={this.addBoardInput} name="name" placeholder=" + New list"></input>
        </form>
      </div>
    );
  }
}

export default Board;
