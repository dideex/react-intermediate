import React, { Component } from "preact-compat";
import { Link } from "preact-router";
import styled, { keyframes } from "react-emotion";
import colors from "./colors";

const Spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const SpyGlass = styled('span')`
  display: inline-block;
  animation: 2s ${Spin} linear infinite;
`

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
    border: 1px solid red;
  }
`;

// NavBar component;
class NavBar extends Component {
  render() {
    return (
      <Container>
        <NavLink href="/">Adopt Me!</NavLink>
        <NavLink href="/search-params">
          <SpyGlass aria-label="search">
            <span role="img">🔍</span>
          </SpyGlass>
        </NavLink>
      </Container>
    );
  }
}

export default NavBar;
