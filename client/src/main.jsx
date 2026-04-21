import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { CartProvider } from "./context/CartContext.jsx";
import { PrefferedCurrencyProvider } from "./context/PrefferedCurrencyContext.jsx";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8000/graphql" }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CartProvider>
          <PrefferedCurrencyProvider>
            <App />
          </PrefferedCurrencyProvider>
        </CartProvider>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
