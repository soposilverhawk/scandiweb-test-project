import React from "react";
import logo from "../../../assets/logo/logo.png";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import CartButton from "../CartButton/CartButton";
import { StyledHeader, HomeButton } from "./Header.styles";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/Routes";
import { useCart } from "../../../context/CartContext";
import CartOverlay from "../../CartOverlay/CartOverlay";

function Header() {
  const navigate = useNavigate();
  const { isCartOpen } = useCart();
  return (
    <StyledHeader>
      <HeaderNavigation />
      <HomeButton onClick={() => navigate(ROUTES.HOME)}>
        <img src={logo} alt="Green shopping bag - app logo" />
      </HomeButton>
      <CartButton />
      {isCartOpen && <CartOverlay />}
    </StyledHeader>
  );
}

export default Header;
