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
import { useMutation } from "@apollo/client/react";
import { PLACE_ORDER } from "../../api/mutations";

function CartOverlay() {
  const {
    cart,
    calculateTotalCost,
    calculateTotalItems,
    clearCart,
    setIsCartOpen,
  } = useCart();
  const { currency } = usePrefferedCurrency();
  const [placeOrder, { data, loading, error }] = useMutation(PLACE_ORDER);

  const handlePlaceOrder = () => {
    placeOrder({
      variables: {
        items: cart.map((item) => ({
          id: item.id,
          qty: item.quantity,
          selected_options: Object.entries(item.selectedAttributes).map(
            ([name, value]) => ({
              name,
              value,
            }),
          ),
        })),
      },
    });
    clearCart();
    setIsCartOpen(false);
  };

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
        <ActionButton variant="place-order" onclick={handlePlaceOrder}>
          Place order
        </ActionButton>
      </CartOverlayContainer>
    )
  );
}

export default CartOverlay;
