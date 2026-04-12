import React from "react";
import cartIconBlack from "../../assets/cart/cart-icon-black.png";
import cartIconWhite from "../../assets/cart/cart-icon-white.png";
import { CartButtonDefault, QuickShopCartButton } from "./CartButton.styles";

function CartButton({ variant = "defaultEmpty", onClick }) {
  return variant === "defaultEmpty" ? (
    <CartButtonDefault>
      <img src={cartIconBlack} alt="cart" />
    </CartButtonDefault>
  ) : (
    <QuickShopCartButton onClick={onClick}>
      <img src={cartIconWhite} alt="cart" />
    </QuickShopCartButton>
  );
}

export default CartButton;
