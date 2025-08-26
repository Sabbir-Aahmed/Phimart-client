import React, { useEffect, useState } from 'react';
import apiClient from '../../Services/api-client';
import ProductCard from '../Products/ProductCard';
import ProductList from './ProductList';

const ShopPage = () => {
    const [products,setProducts] =useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true);
        apiClient.get('/products')
        .then((res) => setProducts(res.data.results))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))

    },[])
    return (

        // product list 
        <div>
            <ProductList products={products} loading={loading} error={error}/>
        </div>
    );
};

export default ShopPage;