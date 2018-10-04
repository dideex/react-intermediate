import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";
import colors from "./colors";

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  span {
    display: inline-block;
    border: 1px solid red;
  }
`;

// NavBar component;
class NavBar extends Component {
  render() {
    return (
      <Container>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="/search-params">
          <span aria-label="search" role="img">
            🔍
          </span>
        </NavLink>
      </Container>
    );
  }
}

export default NavBar;