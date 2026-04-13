import styled from "styled-components";

export const CarouselContainer = styled.div`
  max-width: 57.5rem;
  width: 100%;
  position: relative;
  background-image: ${({ $activeImg }) => `url(${$activeImg})`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NavigationButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #000000ba;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
