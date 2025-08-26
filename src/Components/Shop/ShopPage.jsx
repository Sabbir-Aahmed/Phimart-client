import React, { useEffect, useState } from 'react';
import apiClient from '../../Services/api-client';
import ProductCard from '../Products/ProductCard';
import ProductList from './ProductList';
import Pagination from './Pagination';


const ShopPage = () => {
    const [products,setProducts] =useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState("")
    const [totalPages, setTotlPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchProduct()

    },[])

    const fetchProduct = () => {
        setLoading(true);
        apiClient.get('/products')
        .then((res) => {
            setProducts(res.data.results)
            setTotlPages(Math.ceil(res.data.count / res.data.results.length))
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }
    return (

        // product list 
        <div>
            <ProductList products={products} loading={loading} error={error}/>
            <Pagination  totalPages={totalPages} currentPage={currentPage} handlePageChange = {setCurrentPage}/>
        </div>
    );
};

export default ShopPage;