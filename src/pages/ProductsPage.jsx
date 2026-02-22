import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudgetMode } from "../contexts/BudgetContext";
import ProductsCard from "../components/ProductsCard";

export default function Products() {
  const { budgetMode } = useBudgetMode(false);

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(fetchProducts, []);

  const cheapItems = products.filter((product) => {
    return product.price <= 30;
  });

  const visibileProducts = budgetMode ? cheapItems : products;

  return (
    <div className="row row-cols-5 g-0">
      {visibileProducts.map((product) => {
        return (
          <ProductsCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
