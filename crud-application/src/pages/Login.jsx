import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/Authentication/action";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.authReducer.isAuth);
  // const err = useSelector((store) => store.authReducer.isError);

  const handleLogin = () => {
    let userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <StyledWrapper auth={`${auth}`}>
      <StyledHeading>{auth ? "LOGIN SUCCESSFULL..." : "PLEASE LOGIN.."}</StyledHeading>
      <StyledInput
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton onClick={handleLogin}>LOGIN</StyledButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  background-color: #f7f7f7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h1 {
    /* color: ${({ auth }) => (auth === "true" ? "green" : "red")}; */
    color: ${({auth}) => (auth === "true" ? "green" : "red")};
    font-size: 24px;
    margin: 0;
    padding: 10px 0;
  }

  input {
    height: 40px;
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  button {
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StyledHeading = styled.h1`
  color: ${({ auth }) => (auth === "true" ? "green" : "red")};
  font-size: 24px;
  margin: 0;
  padding: 10px 0;
`;

const StyledInput = styled.input`
  height: 40px;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const StyledButton = styled.button`
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Login;
