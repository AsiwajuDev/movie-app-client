import React, { Component } from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo";
import Links from "../Links/Link";

const Container = styled.div.attrs({
  className: "container-fluid",
})`
  padding-left: 0;
  padding-right: 0;
`;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  justify-content: unset;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20 px;
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;
