import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;

export const CartButtonDefault = styled(ButtonBase)`
  width: 2rem;
  height: 2rem;
  background: none;
`;

export const QuickShopCartButton = styled(ButtonBase)`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-25%, 25%);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.2s ease;
  pointer-events: none;

  &:hover {
    transform: scale(1.2);
  }
`;
