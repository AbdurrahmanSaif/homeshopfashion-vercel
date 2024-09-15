'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ cate }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className='col-span-3 border'>
      <Link href="/pages/sasas">
        <div className="relative w-full h-[400px]">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div> {/* Replace with your loader */}
            </div>
          )}
          <Image
            src={`https://homeshopfashion.com/backend/data/products/${cate.id}/600x720-${cate?.main_image}`}
            width={400}
            height={400}
            className={`w-[auto] h-[400px] object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
            alt={cate.name}
            loading="lazy" // Enable lazy loading
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </div>

        <div>
          <h3>{cate.name}</h3>
        </div>
      </Link>
    </div>
  );
}