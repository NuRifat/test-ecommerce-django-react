import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            Shopy<span className="text-indigo-600">Mart</span>
          </Link>

          {/* Desktop Navigation */}
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

            <Link
              to="/categories"
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Categories
            </Link>

          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Products
              </Link>

              <Link
                to="/categories"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Categories
              </Link>

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cart
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-indigo-600"
              >
                Login
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;