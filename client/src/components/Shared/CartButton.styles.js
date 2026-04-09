import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CartButtonDefault = styled(ButtonBase)`
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
`;

export const CartButtonProductCard = styled(ButtonBase)`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background-color: var(--primary-color);
`;