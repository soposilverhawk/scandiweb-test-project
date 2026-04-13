import styled, { css } from "styled-components";

export const StyledAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: ${({ $variant }) =>
    $variant === "pdp" ? "var(--product-details-text)" : "1.4rem"};
`;

export const AttributeSelectablesContainer = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

export const AttributeSelectable = styled.button`
  font-size: var(--text-standard-size);
  padding: 1.3rem 2.3rem;
  border: ${({ $attributeType }) =>
    $attributeType === "swatch"
      ? "1px solid #fff"
      : "1px solid var(--secondary-color)"};
  background-color: ${({ $attributeType, $attribute_item_value }) =>
    $attributeType === "swatch" ? $attribute_item_value : "transparent"};
  cursor: pointer;
  width: ${({ $attributeType }) =>
    $attributeType === "swatch" ? "3.6rem" : "auto"};
  height: ${({ $attributeType }) =>
    $attributeType === "swatch" ? "3.6rem" : "auto"};

  ${({ $attributeType }) =>
    $attributeType === "swatch"
      ? css`
          &:hover {
            border: 1px solid var(--primary-color);
          }
        `
      : css`
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
          }
        `}
`;
