import React from "react";
import PropTypes from "prop-types";

class CreateBoardForm extends React.Component {
  // set initial state of a board
  state = {
    title: "",
    background: "#80ccff"
  };

  handleSubmit = e => {
    // prevent default behaviour of the form
    e.preventDefault();
    // grab values from a form
    const board = {
      title: this.state.title,
      background: this.state.background,
      createdAt: new Date(),
      user: "abc123"
    };
    // check if board title or background combination exists
    if (board.title && board.background) {
      this.props.createNewBoard(board);
    }
  };
  render() {
    return (
      <form className="create-board-wrapper" onSubmit={this.handleSubmit}>
        {/* onchange() change state of board title  */}
        <input type="text" name="name" placeholder="Board name" onChange={e => this.setState({ title: e.target.value })}></input>
        <select onChange={e => this.setState({ background: e.target.value })}>
          {/* onChange of background color */}

          <option value="#80ccff">Blue</option>
          <option value="#80ffaa">Green</option>
          <option value="#f94a1e">Red</option>
          <option value="#ffb3ff">Pink</option>
          <option value="#bf00ff">Purple</option>
          <option value="#ffad33">Orange</option>
        </select>
        <button type="submit">Create a new board</button>
      </form>
    );
  }
}

CreateBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired
};
export default CreateBoardForm;
