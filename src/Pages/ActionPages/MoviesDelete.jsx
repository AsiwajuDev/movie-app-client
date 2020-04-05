import React, { Component } from "react";
import api from "../../Api Client/Api";

import styled from "styled-components";

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class DeleteMovie extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the movie ${this.props.id} permanently?`
      )
    ) {
      api.deleteMovieById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

export default DeleteMovie;
