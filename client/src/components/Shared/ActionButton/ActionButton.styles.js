import styled from "styled-components";

export const StyledActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 3.2rem;
  background-color: var(--primary-color);
  color: #fff;
  font-size: ${({ $variant }) =>
    $variant === "add-to-cart" ? "1.6rem" : "1.4rem"};
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
