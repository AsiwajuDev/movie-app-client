import React, { Component } from "react";
import styled from "styled-components";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

class UpdateMovie extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/movies/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

export default UpdateMovie;
