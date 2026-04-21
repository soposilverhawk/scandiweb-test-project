import React, { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import ProductDetailsContainer from "../ProductDetailsContainer/ProductDetailsContainer";
import {
  CartOverlayContainer,
  CartHeader,
  CartItemsContainer,
  CartTotalContainer,
} from "./CartOverlay.styles";
import CartItem from "../CartItem/CartItem";
import ActionButton from "../Shared/ActionButton/ActionButton";
import { usePrefferedCurrency } from "../../context/PrefferedCurrencyContext";

function CartOverlay() {
  const { cart, calculateTotalCost, calculateTotalItems } = useCart();
  const { currency } = usePrefferedCurrency();

  return (
    cart.length !== 0 && (
      <CartOverlayContainer>
        <CartHeader>
          My bag,
          <span>
            {` ${calculateTotalItems} `}
            {calculateTotalItems === 1 ? "item" : "items"}
          </span>
        </CartHeader>
        <CartItemsContainer>
          {cart?.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem?.key} />
          ))}
        </CartItemsContainer>
        <CartTotalContainer>
          <p>Total</p>
          <span>
            {currency}
            {calculateTotalCost.toFixed(2)}
          </span>
        </CartTotalContainer>
        <ActionButton variant="place-order">Place order</ActionButton>
      </CartOverlayContainer>
    )
  );
}

export default CartOverlay;
