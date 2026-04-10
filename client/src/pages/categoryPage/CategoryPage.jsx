import React, { useEffect } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import {
  CategoryPageContainer,
  CategoryHeading,
  ProductsContainer,
} from "./CategoryPage.styles";
import capitalizeString from "../../utils/capitalizeString";

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String!) {
    products(category: $category) {
      id
      product_uid
      name
      in_stock
      category_name
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

  useEffect(() => {
    console.log(categoryName);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CategoryPageContainer>
      <CategoryHeading>{capitalizeString(categoryName)}</CategoryHeading>
      <ProductsContainer>
        
      </ProductsContainer>
    </CategoryPageContainer>
  );
}

export default CategoryPage;
