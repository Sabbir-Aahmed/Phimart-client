
import AddToCardButton from '../Components/ProductDetails/AddToCardButton';
import ProductImageGallery from '../Components/ProductDetails/ProductImageGallery';

const ProductDetails = () => {
    const product = 
        {
    id: 1,
    name: "Smartphone",
    description: "High-quality smartphone for everyday use.",
    price: 213.8,
    stock: 5,
    category: 1,
    price_with_tax: 235.18,
    images: [
        {
            id: 1,
            image: "https://res.cloudinary.com/dg9kylqph/image/upload/v1754755645/b2r7fibdqnvk7vea3peb.webp"
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dg9kylqph/image/upload/v1754756053/viwo8ozpeiqb9ect0m0x.webp"
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dg9kylqph/image/upload/v1754756114/dodqcbl0kwyyslqtpzuz.webp"
        }
    ]
}

    return (
        <div className='w-3/4 mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
                <ProductImageGallery images={product.images} ProductName={product.name}/>
                <div className='mt-auto'>
                    <AddToCardButton product={product}/>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;