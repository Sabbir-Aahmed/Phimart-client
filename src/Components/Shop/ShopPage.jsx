import React, { useEffect, useState } from 'react';
import apiClient from '../../Services/api-client';
import ProductList from './ProductList';
import Pagination from './Pagination';


const ShopPage = () => {
    const [products,setProducts] =useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState("")
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchProduct()

    },[currentPage])

    // const fetchProduct = () => {
    //     setLoading(true);
    //     apiClient.get(`/products/?page=${currentPage}`)
    //     .then((res) => {
    //         setProducts(res.data.results)

    //         const pageSize = res.data.results.length > 0 ? res.data.results.length : 1;

    //         if(currentPage === 1){
    //             setTotalPages(Math.ceil(res.data.count / pageSize))
    //         }
    //     })
    //     .catch(err => setError(err.message))
    //     .finally(() => setLoading(false))
    // }

    const fetchProduct = async() => {
        setLoading(true);
        try{
            const response = await apiClient.get(`/products/?page=${currentPage}`)
            const data = await response.data;

            setProducts(data.results)
            const pageSize = data.results.length > 0 ? data.results.length : 1
            if(currentPage === 1){
                setTotalPages(Math.ceil(data.count / pageSize))
            }
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
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