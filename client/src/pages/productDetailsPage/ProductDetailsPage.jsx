import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  ProductPageSection,
  GalleryViewContainer,
} from "./ProductDetailsPage.styles";
import ProductGalleryCarousel from "../../components/ProductGalleryCarousel/ProductGalleryCarousel";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductSideGallery from "../../components/ProductSideGalleryView/ProductSideGalleryView";

const GET_PRODUCT = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      id
      product_uid
      name
      in_stock
      category_name
      brand
      description
      product_gallery
      product_prices {
        amount
        currency_label
        currency_symbol
      }
      product_attributes {
        attribute_id
        type
        name
        product_attribute_items {
          display_value
          attribute_item_value
          attribute_item_id
        }
      }
    }
  }
`;

function ProductDetailsPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      id: Number(id),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductPageSection>
      <GalleryViewContainer>
        <ProductSideGallery productGallery={data?.product?.product_gallery} />
        <ProductGalleryCarousel
          productGallery={data?.product?.product_gallery}
        />
      </GalleryViewContainer>
      <ProductDescription
        variant="pdp"
        productName={data?.product?.name}
        productAttributes={data?.product?.product_attributes}
        productPrices={data?.product?.product_prices}
        productDescription={data?.product?.description}
      />
    </ProductPageSection>
  );
}

export default ProductDetailsPage;
