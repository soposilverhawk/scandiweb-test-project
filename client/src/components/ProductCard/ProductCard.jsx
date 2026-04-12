import React, { useMemo } from "react";
import {
  ProductListItem,
  ProductLink,
  ProductImageContainer,
  ProductImage,
  ProductInformationContainer,
  ProductInformationBase,
  ProductInformationPrice,
} from "./ProductCard.styles";
import QuickShopButton from "../Shared/CartButton";

{
  /* Each product card needs to display the following:
    1. Product's main image
    2. Product name
    3. Product price

    In-stock products - have to be clickable and lead to the ProductDetails Page (PDP)

    Out-of-stock products:
    1. Product Image needs to be grayed out
    2. Out of stock message has to be visible on the product image
    3. The quick shop button (the green cart button) must not be visible
    4. Product card has to be clickable and lead to the product's main page. However, add-to-cart functionality must not be visible
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
  const pricesMap = useMemo(() => {
    return Object.fromEntries(
      productPrices.map((price) => [price.currency_symbol, price.amount]),
    );
  }, [productPrices]);

  const preferredPriceCurrency = "$";
  const amount =
    pricesMap[preferredPriceCurrency] ?? Object.values(pricesMap)[0];

  const handleQuickShop = (e, productReference) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked product:", productReference);
    // implement the quick shop functionality
  };

  return (
    <ProductListItem>
      <ProductLink to={`/product/${id}`}>
        <ProductImageContainer>
          <ProductImage src={image} alt={name} />
          {isInStock && (
            <QuickShopButton
              variant="quickshop"
              onClick={(e) => handleQuickShop(e, productUid)}
            />
          )}
        </ProductImageContainer>
        <ProductInformationContainer>
          <ProductInformationBase>{name}</ProductInformationBase>
          <ProductInformationPrice>
            {`${preferredPriceCurrency}${amount}`}
          </ProductInformationPrice>
        </ProductInformationContainer>
      </ProductLink>
    </ProductListItem>
  );
}

export default ProductCard;
