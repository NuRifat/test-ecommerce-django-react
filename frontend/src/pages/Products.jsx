import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Shop everything
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          All Products
        </h1>

        <p className="mt-3 text-gray-500">
          Explore all products available at ShopyMart.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;