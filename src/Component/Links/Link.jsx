import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})`
  flex-basis: auto;
`;

const List = styled.div.attrs({
  className: "navbar-nav ml-3",
})`
  flex-direction: unset;
`;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})`
  flex-basis: unset;
`;

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          Movie App
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/movies/list" className="nav-link">
                Movies List
              </Link>
            </Item>
            <Item>
              <Link to="/movies/create" className="nav-link">
                Create Movie
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
