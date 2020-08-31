import React from "react";
import BoardPreview from "../BoardPreview";
import PropTypes from "prop-types";
import CreateBoardForm from "../CreateBoardForm";

class Home extends React.Component {
  // method to create a new board
  // newBoard = () => {
  //   // hard coded board object
  //   const board = {
  //     title: "Trip to take this year",
  //     background: "#80ffaa",
  //     createdAt: new Date()
  //   };
  //   // call to createNewMethod() and passing in board object
  //   this.props.createNewBoard(board);
  // };
  render() {
    return (
      <div>
        <h3>Home</h3>
        {/* passing createNewBoard method a props */}
        <CreateBoardForm createNewBoard={this.props.createNewBoard} />
        <div className="board-preview-wrapper">
          {
            // passing props second level down from Home to BoardPreview component
            // multiple board preview and hence .map() is used
            // boards is an array that has keys (index) for each object
            // this.props.boards is an object and thus Object.keys returns an array of an object properties and on this we can use .map method
            Object.keys(this.props.boards).map(key => (
              <BoardPreview key={key} board={this.props.boards[key]} />
            ))
          }
        </div>
      </div>
    );
  }
}

// props validation
// passing two props types into home component
Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired
};

export default Home;
