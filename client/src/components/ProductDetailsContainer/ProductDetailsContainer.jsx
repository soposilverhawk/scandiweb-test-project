import React from "react";
import {
  ProductDescriptionContainer,
  ProductName,
  ProductPriceDisplay,
  ProductDescriptionDisplay,
} from "./ProductDetailsContainer.styles";
import AttributeList from "../AttributeList/AttributeList";
import ActionButton from "../Shared/ActionButton/ActionButton";
import { usePricesMap } from "../../hooks/usePricesMap";
import { StyledAttributesContainer } from "../AttributeList/AttributeList.styles";
import { useParseHTML } from "../../hooks/useParseHTML";

function ProductDetailsContainer({
  variant,
  productName,
  productAttributes,
  productPrices,
  productDescription,
}) {
  const { amount, currency } = usePricesMap(productPrices);
  const parsedProductDescription = useParseHTML(productDescription);

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
          <ProductPriceDisplay
            $variant={variant}
          >{`${currency}${amount}`}</ProductPriceDisplay>
        </StyledAttributesContainer>
        <ActionButton variant="add-to-cart">Add to cart</ActionButton>
        <ProductDescriptionDisplay data-testid="product-description">
          {parsedProductDescription}
        </ProductDescriptionDisplay>
      </ProductDescriptionContainer>
    </>
  );
}

export default ProductDetailsContainer;
