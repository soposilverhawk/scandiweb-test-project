import React from "react";
import {
  StyledAttributesContainer,
  AttributeSelectable,
  AttributeSelectablesContainer,
} from "./AttributeList.styles";

function AttributeList({ variant = "pdp", productAttributesData }) {
  return (
    productAttributesData.length !== 0 && (
      <StyledAttributesContainer $variant={variant}>
        {productAttributesData?.map(
          ({ attribute_id, name, product_attribute_items, type }) => (
            <>
              <h2>{name}:</h2>
              <AttributeSelectablesContainer key={attribute_id}>
                {product_attribute_items?.map(
                  ({ attribute_item_id, attribute_item_value }) => (
                    <AttributeSelectable
                      key={attribute_item_id}
                      $attributeType={type}
                      $attribute_item_value={attribute_item_value}
                    >
                      {type === "text" && attribute_item_value}
                    </AttributeSelectable>
                  ),
                )}
              </AttributeSelectablesContainer>
            </>
          ),
        )}
      </StyledAttributesContainer>
    )
  );
}

export default AttributeList;
