"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SAMSUNG_API_URL);

        const {
          response: {
            resultData: { productList },
          },
        } = await response.json();

        setProducts(productList);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="w-full h-screen overflow-scroll p-10 grid grid-cols-6">
      {products.map((product) => (
        <div key={product.familyId} className="shadow-sm p-5 rounded-sm"></div>
      ))}
    </main>
  );
}
