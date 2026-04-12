import React from "react";
import cartHeaderIcon from "../../../assets/cart/cart-icon-black.png";
import cartProductCardIconfrom from "../../../assets/cart/cart-icon-white.png";
import {
  CartButtonDefault,
  QuickShopCartButton,
} from "../CartButton/CartButton.styles";

function CartButton({ variant = "defaultEmpty", onClick }) {
  return variant === "defaultEmpty" ? (
    <CartButtonDefault>
      <img src={cartHeaderIcon} alt="cart" />
    </CartButtonDefault>
  ) : (
    <QuickShopCartButton onClick={onClick}>
      <img src={cartProductCardIconfrom} alt="cart" />
    </QuickShopCartButton>
  );
}

export default CartButton;
