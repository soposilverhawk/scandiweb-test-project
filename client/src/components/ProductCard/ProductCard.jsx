import React from "react";
import {
  ProductListItem,
  ProductLink,
  ProductImageContainer,
  ProductImage,
  ProductInformationContainer,
  ProductInformationBase,
  ProductInformationPrice,
  OutOfStockOverlay,
  OutOfStockMessage,
} from "./ProductCard.styles";
import QuickShopButton from "../Shared/CartButton/CartButton";
import formatStringToKebabCase from "../../utils/formatStringToKebabCase";
import { usePricesMap } from "../../hooks/usePricesMap";

{
  /* Each product card needs to display the following:
    1. Product's main image ✅
    2. Product name ✅
    3. Product price ✅
    4. Product Price have to be in the correct format (2 digits after the dot) ✅

    In-stock products:
    1. have to be clickable and lead to the ProductDetails Page (PDP) ✅

    Out-of-stock products:
    1. Product Image needs to be grayed out ✅
    2. Out of stock message has to be visible on the product image ✅
    3. The quick shop button (the green cart button) must not be visible ✅
    4. Product card has to be clickable and lead to the product's main page. However, add-to-cart functionality must not be visible ✅

    Quick shop button:
    1. Clicking on the quick shop button (The green cart button) have to add a product with its default (first in each options array) options to cart ❌
    2. The Quick Shop button should be displayed only when user is hovering over product card ✅

    ! Product card must have attribute data-testid='product-${product name in kebab case}' ✅
*/
}
function ProductCard({
  name,
  image,
  productPrices,
  isInStock,
  productUid,
  id,
}) {
  const { amount, currency } = usePricesMap(productPrices);

  return (
    <ProductListItem data-testid={`product-${formatStringToKebabCase(name)}`}>
      <ProductLink to={`/product/${id}`}>
        <ProductImageContainer>
          <ProductImage src={image} alt={name} />
          {isInStock ? (
            <QuickShopButton
              variant="quickshop"
              onClick={(e) => handleQuickShop(e, productUid)}
            />
          ) : (
            <OutOfStockOverlay>
              <OutOfStockMessage>OUT OF STOCK</OutOfStockMessage>
            </OutOfStockOverlay>
          )}
        </ProductImageContainer>
        <ProductInformationContainer $isInStock={isInStock}>
          <ProductInformationBase>{name}</ProductInformationBase>
          <ProductInformationPrice>
            {`${currency}${amount}`}
          </ProductInformationPrice>
        </ProductInformationContainer>
      </ProductLink>
    </ProductListItem>
  );
}

export default ProductCard;
