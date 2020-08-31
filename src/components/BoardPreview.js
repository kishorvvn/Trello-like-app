import React from "react";
import PropTypes from "prop-types";

class BoardPreview extends React.Component {
  render() {
    // access props that was passed down
    return <h3> {this.props.board.title}</h3>;
  }
}

BoardPreview.propTypes = {
  board: PropTypes.object.isRequired
};
export default BoardPreview;
