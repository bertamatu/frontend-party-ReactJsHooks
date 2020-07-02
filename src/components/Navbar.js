import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMenu = styled.nav`
  position: sticky;
  text-align: center;
  padding-top: 2rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
const Navbar = () => {
  return (
    <NavMenu>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/login">Login</LinkItem>
    </NavMenu>
  );
};

export default Navbar;
