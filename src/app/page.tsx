"use client";

import { Card } from "@/components";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

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
    <main className="w-full h-screen overflow-scroll p-10 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
      {products.map((product) => (
        <Card
          key={product.familyId}
          chipOptions={product.chipOptions}
          title={product.fmyMarketingName}
          models={product.modelList}
        />
      ))}
    </main>
  );
}
