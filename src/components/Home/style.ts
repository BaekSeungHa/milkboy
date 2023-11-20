import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const TH = styled.div`
  display: flex;
  justify-content: space-around;

  width: 80%;

  margin-top: 30px;

  font-size: 18px;
  border-bottom: 1px solid gray;
`;

export const TD = styled.div`
  width: 80%;

  display: flex;

  justify-content: space-around;

  border-bottom: 1px solid gray;
`;
