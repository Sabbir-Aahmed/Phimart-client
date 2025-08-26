import React from 'react';
import ProductCard from '../Products/ProductCard';
import ErrorAlert from '../Products/ErrorAlert';

const ProductList = ({products, loading, error}) => {

    if (loading)
        return(
            <div className="flex justify-center items-center py-10 min-h-screen">
                <span className="loading loading-spinner text-secondary loading-xl "></span>
            </div>
        )
            
    if (error)
        return (
            <ErrorAlert error={error}/>
        )

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    );
};

export default ProductList;