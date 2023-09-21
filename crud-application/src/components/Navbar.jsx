import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT } from "../redux/Authentication/actionTypes";

const Navbar = () => {
  const dispatch =  useDispatch()
  const handleLogout = () => {
    
     dispatch({type : LOGOUT})
  }
  return (
    <StyledNavbar>
      <StyledLogo>Product List </StyledLogo>
      <StyledLinks>
        
      <StyledLink  to="/">Home</StyledLink>
      <StyledLink  to="/login">Login</StyledLink>
      <StyledLink to="/admin">Admin</StyledLink>
      <StyledButton onClick = {handleLogout}>LOGOUT</StyledButton>
      </StyledLinks>
      
    </StyledNavbar>
  );
};


const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 150px;
`;

const StyledLogo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  transition: color 0.3s ease;

 
  &:hover {
    color: #0056b3;
  }


`;

const StyledButton = styled.button`
  background-color: #a4caf2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;


export default Navbar;
