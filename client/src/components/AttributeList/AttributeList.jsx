import React from "react";
import {
  StyledAttributesContainer,
  AttributeSelectableButton,
  AttributeSelectablesContainer,
  AttributeContainer,
} from "./AttributeList.styles";
import formatStringToKebabCase from "../../utils/formatStringToKebabCase";

function AttributeList({
  variant = "pdp",
  productAttributesData,
  selectedAttributes,
  setSelectedAttributes,
}) {
  const handleAttributeSelection = (attribute_id, value) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attribute_id]: value,
    }));
  };

  return (
    productAttributesData?.length > 0 && (
      <StyledAttributesContainer $variant={variant}>
        {productAttributesData.map(
          ({ attribute_id, name, product_attribute_items, type }) => (
            <AttributeContainer
              key={attribute_id}
              data-testid={`product-attribute-${formatStringToKebabCase(name)}`}
            >
              <h2>{name}:</h2>

              <AttributeSelectablesContainer>
                {product_attribute_items.map(
                  ({ attribute_item_id, attribute_item_value }) => {
                    const isSelected =
                      selectedAttributes?.[attribute_id] === attribute_item_id;

                    return (
                      <li key={attribute_item_id}>
                        <AttributeSelectableButton
                          $variant={variant}
                          $attributeType={type}
                          $attribute_item_value={attribute_item_value}
                          $active={isSelected}
                          onClick={() =>
                            handleAttributeSelection(
                              attribute_id,
                              attribute_item_value,
                            )
                          }
                        >
                          {type === "text" && attribute_item_value}
                        </AttributeSelectableButton>
                      </li>
                    );
                  },
                )}
              </AttributeSelectablesContainer>
            </AttributeContainer>
          ),
        )}
      </StyledAttributesContainer>
    )
  );
}

export default AttributeList;
