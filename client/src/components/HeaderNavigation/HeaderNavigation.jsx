import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { StyledUL, StyledListItem } from "./HeaderNavigation.styles";
import { Link, useLocation } from "react-router-dom";
import capitalizeString from "../../utils/capitalizeString";

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

function HeaderNavigation() {
  const { data, loading } = useQuery(GET_CATEGORIES);
  const location = useLocation();

  if (loading) return null;
  return (
    <StyledUL>
      {data.categories.map((cat) => {
        const isActive =
          location.pathname === `/category/${cat.name.toLowerCase()}`;

        return (
          <StyledListItem key={`${cat.name}-category-${cat.id}`}>
            <Link
              to={`/category/${cat.name.toLowerCase()}`}
              data-testid={isActive ? "active-category-link" : "category-link"}
            >
              {capitalizeString(cat.name)}
            </Link>
          </StyledListItem>
        );
      })}
    </StyledUL>
  );
}

export default HeaderNavigation;
