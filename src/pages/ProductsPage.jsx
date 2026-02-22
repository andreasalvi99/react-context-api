import { useBudgetMode } from "../contexts/BudgetContext";
import ProductsCard from "../components/ProductsCard";

export default function Products() {
  const { visibileProducts } = useBudgetMode(false);

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
