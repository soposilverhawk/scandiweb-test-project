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

function CartOverlay() {
  const { cart, calculateTotalCost, calculateTotalItems } = useCart();

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
            ${calculateTotalCost.toFixed(2)}
            {/* placeholder hardcoded currency */}
          </span>
        </CartTotalContainer>
        <ActionButton variant="place-order">Place order</ActionButton>
      </CartOverlayContainer>
    )
  );
}

export default CartOverlay;
