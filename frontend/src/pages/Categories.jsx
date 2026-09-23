import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const parentCategories = categories.filter(
    (category) => category.parent === null
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Shop by category
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Explore Our Categories
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Find the products you are looking for by exploring our collections.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {parentCategories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="group rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-2xl transition group-hover:bg-indigo-600 group-hover:text-white">
              {category.name === "Men's Cloth" && "👔"}
              {category.name === "Women's Cloth" && "👗"}
              {category.name === "Tech Item" && "📱"}
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">
              {category.name}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore collection
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-800">
              View Products →
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default Categories;