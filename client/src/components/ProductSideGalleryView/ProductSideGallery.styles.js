import styled from "styled-components";

export const ProductSideGalleryContainer = styled.div`
  max-width: 8rem;
  max-height: 47.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductImageButton = styled.button`
  width: 100%;
  max-height: 8rem;
  height: 100%;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
