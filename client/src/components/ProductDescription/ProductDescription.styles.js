import styled from "styled-components";

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: ${({ $variant }) => ($variant === "pdp" ? "3.2rem" : "4rem")};
  max-width: 29.2rem;
  min-height: 54.1rem;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  font-size: ${({ $variant }) =>
    $variant === "pdp" ? "3rem" : "var(--product-details-text)"};
  font-weight: ${({ $variant }) => ($variant === "pdp" ? 600 : 300)};
  color: var(--secondary-color);
`;

export const ProductPriceDisplay = styled.span`
  font-size: ${({ $variant }) =>
    $variant === "pdp" ? "2.4rem" : "var(--text-standard-size)"};
  font-weight: 700;
`;

export const ProductDescriptionDisplay = styled.p`
  font-size: var(--text-standard-size);
`;
