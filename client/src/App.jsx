import "./App.css";
import ContentWrapper from "./components/Shared/ContentWrapper/ContentWrapper";
import Header from "./components/Shared/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import CartOverlay from "./components/CartOverlay/CartOverlay";
import { useCart } from "./context/CartContext";

function App() {
  const { isCartOpen } = useCart();
  
  return (
    <ContentWrapper>
      <Header />
      {isCartOpen && <CartOverlay />}
      <main>
        <AppRoutes />
      </main>
    </ContentWrapper>
  );
}

export default App;
