import { styled } from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 100vh;
  padding-top: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const LoginText = styled.p`
  font-size: 25px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  input {
    width: 300px;
    height: 50px;

    border: none;

    padding-left: 10px;

    border: 1px solid gray;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-top: 50px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const PathToSignup = styled.p`
  font-size: 10px;
  margin-left: 163px;

  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 50px;

  margin-top: 10px;

  background-color: blue;
  color: white;
`;
