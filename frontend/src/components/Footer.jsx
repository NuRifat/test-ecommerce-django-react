function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-400">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Shopy<span className="text-indigo-500">Mart</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6">
              Discover clothing, technology and everyday essentials
              carefully selected for your lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="/products"
                className="block transition hover:text-white"
              >
                All Products
              </a>

              <a
                href="/categories"
                className="block transition hover:text-white"
              >
                Categories
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="#"
                className="block transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="#"
                className="block transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Customer
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="/login"
                className="block transition hover:text-white"
              >
                Login
              </a>

              <a
                href="/cart"
                className="block transition hover:text-white"
              >
                Cart
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} ShopyMart. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;