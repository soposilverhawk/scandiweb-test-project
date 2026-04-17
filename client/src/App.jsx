import { useState } from "react";
import "./App.css";
import ContentWrapper from "./components/Shared/ContentWrapper/ContentWrapper";
import Header from "./components/Shared/Header/Header";
import AppRoutes from "./routes/AppRoutes";

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
