
import ProductImageGallery from '../Components/ProductDetails/ProductImageGallery';

const ProductDetails = () => {
    const product = 
        {
    id: 1,
    name: "Smartphone",
    description: "High-quality smartphone for everyday use.",
    price: 213.8,
    stock: 157,
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
        <div>
            <ProductImageGallery images={product.images} ProductName={product.name}/>
        </div>
    );
};

export default ProductDetails;