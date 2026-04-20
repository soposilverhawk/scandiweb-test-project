import "./App.css";
import ContentWrapper from "./components/Shared/ContentWrapper/ContentWrapper";
import Header from "./components/Shared/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import CartOverlay from "./components/CartOverlay/CartOverlay";

function App() {
  return (
    <ContentWrapper>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </ContentWrapper>
  );
}

export default App;
