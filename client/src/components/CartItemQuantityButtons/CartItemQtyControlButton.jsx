import React, { useEffect } from "react";
import { CartItemControlButton } from "./CartItemQtyControlButton.styles";
import { useCart } from "../../context/CartContext";

function CartItemQuantityButton({ children, onClick }) {
  return <CartItemControlButton onClick={onClick}>{children}</CartItemControlButton>;
}

export default CartItemQuantityButton;
