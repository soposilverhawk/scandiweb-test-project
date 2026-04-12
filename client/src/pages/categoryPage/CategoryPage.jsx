import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import {
  CategoryPageContainer,
  CategoryHeading,
  ProductsContainer,
} from "./CategoryPage.styles";
import capitalizeString from "../../utils/capitalizeString";
import ProductCard from "../../components/ProductCard/ProductCard";

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String!) {
    products(category: $category) {
      id
      product_uid
      name
      in_stock
      product_gallery
      product_prices {
        amount
        currency_symbol
      }
    }
  }
`;

function CategoryPage() {
  const { categoryName } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category: categoryName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CategoryPageContainer>
      <CategoryHeading>{capitalizeString(categoryName)}</CategoryHeading>
      <ProductsContainer>
        {data.products.map(
          ({ name, product_gallery, product_prices, product_uid, id }) => (
            <ProductCard
              name={name}
              image={product_gallery[0]}
              productPrices={product_prices}
              key={product_uid}
              id={id}
            />
          ),
        )}
      </ProductsContainer>
    </CategoryPageContainer>
  );
}

export default CategoryPage;
