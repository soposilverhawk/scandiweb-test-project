import styled from "styled-components";

export const CartOverlayContainer = styled.div`
  max-width: 32.5rem;
  padding: 3.2rem 1.6rem;
  max-height: 63rem;
  width: 100%;
  background-color: #fff;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 99999;
`;

export const CartHeader = styled.p`
  font-size: var(--text-standard-size);
  font-weight: bold;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow-y: auto;
  overlofw-x: hidden;

  /* Firefox */
  scrollbar-width: none;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: var(--text-standard-size);
`;
