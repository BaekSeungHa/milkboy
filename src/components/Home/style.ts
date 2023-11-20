import { styled } from "styled-components";

export const LoginBox = styled.form`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 20px;

  input {
    width: 20%;
    height: 5%;

    font-size: 20px;
    padding-left: 10px;
  }
`;

export const Text = styled.p`
  font-size: 50px;
`;
