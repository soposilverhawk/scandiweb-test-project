import styled from "styled-components";

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 3.2rem;
  max-width: 29.2rem;
  min-height: 54.1rem;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: var(--secondary-color);
`;

export const ProductPriceDisplay = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const ProductDescriptionDisplay = styled.div`
  font-size: var(--text-standard-size);
`;