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

export const Table = styled.table`
  width: 80%;
  margin-top: 30px;
  border-collapse: collapse;
`;

export const TH = styled.th`
  font-size: 18px;
  border: 1px solid gray;
  padding: 8px;
`;

export const TD = styled.td`
  text-align: center;
  border: 1px solid gray;
  padding: 8px;
`;

// Additional styling for CheckBox if needed
export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
