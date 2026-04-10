import React from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();
  return <div>Showing products for {categoryName}</div>;
}

export default CategoryPage;
