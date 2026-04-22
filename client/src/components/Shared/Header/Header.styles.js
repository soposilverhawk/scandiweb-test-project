import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HomeButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
