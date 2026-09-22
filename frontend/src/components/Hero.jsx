import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-20 left-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">

        {/* Left Content */}
        <div className="z-10">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Modern shopping, made simple
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Find something
            <span className="block text-indigo-400">
              you'll love.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Discover clothing, technology and everyday essentials
            carefully selected for your lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/products"
              className="rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-500"
            >
              Explore Products
            </Link>

            <a
              href="#categories"
              className="rounded-full border border-gray-700 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Browse Categories
            </a>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center lg:justify-end">
        <img
            src="/images/hero-image.png"
            alt="ShopyMart fashion and technology collection"
            className="mx-auto w-full max-w-md object-contain lg:mx-0 lg:max-w-lg"
        />
        </div>

      </div>
    </section>
  );
}

export default Hero;