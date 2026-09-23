import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function CategoryProducts() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/categories/${id}/products/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Category
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Products
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Explore all products from this category.
        </p>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default CategoryProducts;