import React from "react";
import logo from "../../assets/logo/logo.png";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import CartButton from "../Shared/CartButton/CartButton";
import { StyledHeader, HomeButton } from "./Header.styles";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/Routes";

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <HeaderNavigation />
      <HomeButton onClick={() => navigate(ROUTES.HOME)}>
        <img src={logo} alt="Green shopping bag - app logo" />
      </HomeButton>
      <CartButton />
    </StyledHeader>
  );
}

export default Header;
