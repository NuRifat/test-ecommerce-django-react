import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={`${API_BASE_URL}${product.image}`}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">
            ৳{product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            View
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;