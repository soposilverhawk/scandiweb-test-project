import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
