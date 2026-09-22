import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductSection({ products }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Our collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
        </div>

        <Link
          to="/products"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-800 sm:block"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductSection;