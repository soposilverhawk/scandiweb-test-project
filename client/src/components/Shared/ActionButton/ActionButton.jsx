import React from "react";
import { StyledActionButton } from "./ActionButton.styles";

function ActionButton({ variant, children, onclick }) {
  return (
    <StyledActionButton $variant={variant} onClick={onclick}>
      {children}
    </StyledActionButton>
  );
}

export default ActionButton;
