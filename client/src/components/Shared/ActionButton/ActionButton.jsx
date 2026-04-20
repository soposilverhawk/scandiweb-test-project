import React from "react";
import { StyledActionButton } from "./ActionButton.styles";

function ActionButton({ variant, children, onclick }) {
  return (
    <StyledActionButton
      $variant={variant}
      onClick={onclick}
      data-testid={variant === "add-to-cart" ? "add-to-cart" : "place-order"}
    >
      {children}
    </StyledActionButton>
  );
}

export default ActionButton;
