import { useBudgetMode } from "../contexts/BudgetContext";
import ProductsCard from "../components/ProductsCard";

export default function Products() {
  const { budgetMode, products } = useBudgetMode(false);

  const cheapItems = products.filter((product) => {
    return product.price <= 30;
  });

  const visibileProducts = budgetMode ? cheapItems : products;

  return (
    <div className="row row-cols-5 g-0">
      {visibileProducts.map((product) => {
        return (
          <ProductsCard
            id={product.id}
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
