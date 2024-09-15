import Image from "next/image";

export async function generateMetadata({ params }) {
  const product = await getProductData(params.productId);

  return {
    title: `${product.name} - Homeshop Fashion`,
    description: `Buy ${product.name} at an affordable price of Rs. ${product.selling_price}.`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: `https://homeshopfashion.com/backend/data/products/${product.id}/600x720-${product.main_image}`,
        },
      ],
      url: `https://homeshopfashion.com/product/${product.id}`,
    },
    twitter: {
      card: 'summary_large_image',
    }
  };
}

async function getProductData(productId) {
  const response = await fetch(`https://homeshopfashion.com/backend/api/web/products/${productId}`);
  return response.json();
}

const ProductDetails = async ({ params }) => {
  const product = await getProductData(params.productId);

  return (
    <div className='max-w-[1200px] mx-auto my-10'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-5'>
          <Image
            src={`https://homeshopfashion.com/backend/data/products/${product.id}/600x720-${product?.main_image}`}
            width={400}
            height={400}
            className='w-[100%] h-[100%] object-cover border'
            alt={product.name}
            loading='lazy' // Enable lazy loading
          />
        </div>

        <div className='col-span-7'>
          <h1 className='font-bold font-sans text-lg'>{product?.name}</h1>
          <div className='flex gap-3 mt-3 mb-2'>
            <h3 className='line-through'>Rs. {product.mrp}</h3>
            <h3 className='text-md text-green-800 font-bold'>
              Rs. {product.selling_price}
            </h3>
          </div>

          <h3 className='my-1'>Color: {product.item_color}</h3>
          <h3 className='my-1'>Size: {product.item_size}</h3>

          <p>{product.description}</p>

          <button
            type='button'
            className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
