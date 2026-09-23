import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import api from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/api/products/")
    .then((response) => {
      setProducts(response.data);
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