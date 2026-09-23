import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    api.get(`/api/products/${id}/`)
    .then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl bg-gray-100">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-bold text-indigo-600">
            ৳{product.price}
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Description
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {product.description}
            </p>
          </div>

          {/* Add to Cart */}
          <button
            className="mt-8 w-full rounded-full bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-indigo-600 sm:w-auto"
          >
            Add to Cart
          </button>

          <div className="mt-6">
            <Link
              to="/products"
              className="text-sm font-medium text-gray-500 hover:text-indigo-600"
            >
              ← Back to Products
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;