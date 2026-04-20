import styled, { css } from "styled-components";

export const StyledAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $variant }) => ($variant === "pdp" ? "5rem" : "0.8rem")};
  font-size: ${({ $variant }) =>
    $variant === "pdp" ? "var(--product-details-text)" : "1.4rem"};
  font-weight: ${({ $variant }) => ($variant === "pdp" ? 700 : 300)};
`;

export const AttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AttributeSelectablesContainer = styled.ul`
  display: flex;
  gap: ${({ $variant }) => ($variant === "pdp" ? "1.2rem" : "0.8rem")};
`;

export const AttributeSelectableButton = styled.button`
  font-size: ${({ $variant }) =>
    $variant === "pdp" ? "var(--text-standard-size)" : "1.4rem"};
  padding: ${({ $variant }) =>
    $variant === "pdp" ? "1.3rem 2.3rem" : "0.2rem"};
  cursor: pointer;

  width: ${({ $attributeType, $variant }) =>
    $attributeType === "swatch"
      ? $variant === "pdp"
        ? "3.6rem"
        : "2rem"
      : "auto"};

  height: ${({ $attributeType, $variant }) =>
    $attributeType === "swatch"
      ? $variant === "pdp"
        ? "3.6rem"
        : "2rem"
      : "auto"};

  border: ${({ $attributeType, $active }) =>
    $active
      ? "2px solid black"
      : $attributeType === "swatch"
        ? "1px solid #fff"
        : "1px solid var(--secondary-color)"};

  background-color: ${({ $attributeType, $attribute_item_value, $active }) =>
    $active
      ? "black"
      : $attributeType === "swatch"
        ? $attribute_item_value
        : "transparent"};

  color: ${({ $active }) => ($active ? "#fff" : "inherit")};

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
