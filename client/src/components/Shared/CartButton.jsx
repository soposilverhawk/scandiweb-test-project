import React from "react";
import cartIconBlack from "../../assets/cart/cart-icon-black.png";
import cartIconWhite from "../../assets/cart/cart-icon-white.png";
import { CartButtonDefault, CartButtonProductCard } from "./CartButton.styles";

function CartButton({ variant = "defaultEmpty" }) {
  return variant === "defaultEmpty" ? (
    <CartButtonDefault>
      <img src={cartIconBlack} alt="cart" />
    </CartButtonDefault>
  ) : (
    <CartButtonProductCard>
      <img src={cartIconWhite} alt="cart" />
    </CartButtonProductCard>
  );
}

export default CartButton;
