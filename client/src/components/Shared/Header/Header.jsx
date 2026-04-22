import React from "react";
import logo from "../../../assets/logo/logo.png";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import CartButton from "../CartButton/CartButton";
import { StyledHeader, HomeButton, HeaderInner } from "./Header.styles";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/Routes";
import CartOverlay from "../../CartOverlay/CartOverlay";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

function Header({ isCartOpen }) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <ContentWrapper>
        <HeaderInner>
          <HeaderNavigation />
          <HomeButton onClick={() => navigate(ROUTES.HOME)}>
            <img src={logo} alt="Green shopping bag - app logo" />
          </HomeButton>
          <CartButton />
          {isCartOpen && <CartOverlay />}
        </HeaderInner>
      </ContentWrapper>
    </StyledHeader>
  );
}

export default Header;
