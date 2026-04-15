import React from "react";
import {
  ProductDescriptionContainer,
  ProductName,
  ProductPriceDisplay,
  ProductDescriptionDisplay,
} from "./ProductDescription.styles";
import AttributeList from "../AttributeList/AttributeList";
import ActionButton from "../Shared/ActionButton/ActionButton";
import { usePricesMap } from "../../hooks/usePricesMap";
import { StyledAttributesContainer } from "../AttributeList/AttributeList.styles";

function ProductDescription({
  variant,
  productName,
  productAttributes,
  productPrices,
  productDescription,
}) {
  const { amount, currency } = usePricesMap(productPrices);

  return (
    <>
      {variant === "cartOverlay" && (
        <h2>
          My bag, <span>3</span> items
        </h2>
      )}
      <ProductDescriptionContainer $variant={variant}>
        <ProductName as={variant === "pdp" ? "h1" : "p"} $variant={variant}>
          {productName}
        </ProductName>
        <AttributeList
          variant={variant}
          productAttributesData={productAttributes}
        />
        <StyledAttributesContainer $variant={variant}>
          <p>Price:</p>
          <ProductPriceDisplay>{`${currency}${amount}`}</ProductPriceDisplay>
        </StyledAttributesContainer>
        <ActionButton>Add to cart</ActionButton>
        <ProductDescriptionDisplay>
          description goes here, create parser for html
        </ProductDescriptionDisplay>
      </ProductDescriptionContainer>
    </>
  );
}

export default ProductDescription;
