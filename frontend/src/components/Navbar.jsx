import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="text-2xl font-bold tracking-tight">
          Shopy<span className="text-indigo-600">Mart</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
          >
            Products
          </Link>

          <a
            href="#categories"
            className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
          >
            Categories
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;