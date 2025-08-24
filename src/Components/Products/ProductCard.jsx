import Def from "../../assets/default_product.jpg"
const ProductCard = ({product}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={product.images.length > 0 ? product.images[0].image : Def}
          alt={product.name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h3 className="text-xl font-bold text-red-700">${product.price}</h3>
        <p className="text-gray-700">
          {product.description}
        </p>
        <div className="card-actions mt-1">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
