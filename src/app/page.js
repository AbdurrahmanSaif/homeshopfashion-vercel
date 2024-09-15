import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let data = await fetch(
    "https://homeshopfashion.com/backend/api/web/products?per-page=1000&page=1"
  );
  let products = await data.json();

  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          {products?.map((prod) => (
            <div className='col-span-3 border' key={prod?.id}>
              <Link href={`/product/${prod.id}`}>
                <div>
                  <Image
                    src={`https://homeshopfashion.com/backend/data/products/${prod.id}/600x720-${prod?.main_image}`}
                    width={400}
                    height={400}
                    className='w-[auto] h-[400px] object-cover'
                    alt={prod.name}
                    loading='lazy' // Enable lazy loading
                  />
                </div>

                <div>
                  <h3>{prod.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
