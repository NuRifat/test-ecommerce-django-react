import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Hero />
      <ProductSection products={products} />
    </>
  );
}

export default Home;