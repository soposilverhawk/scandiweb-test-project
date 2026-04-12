import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const ProductListItem = styled.li`
  max-width: 38.6rem;
  max-height: 44.4rem;
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  gap: 2.4rem;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 0.4rem 3rem 0 var(--tertiary-color);
  }
`;

export const ProductLink = styled(Link)`
  ${flexColumn}
  gap: 1rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 40rem;
  object-fit: cover;
  object-position: 50% 10%;
`;

export const ProductInformationContainer = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

export const ProductInformationBase = styled.p`
  font-size: var(--product-details-text);
  color: var(--secondary-color);
  font-weight: w00;
`;

export const ProductInformationPrice = styled(ProductInformationBase)`
  font-weight: 400;
`;
