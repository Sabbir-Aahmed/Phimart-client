import React, {useState } from 'react';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProducts from '../../hooks/useFetchProducts';


const ShopPage = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const {products,loading,error,totalPages} = useFetchProducts(currentPage)


    return (

        // product list 
        <div>
            <ProductList products={products} loading={loading} error={error}/>
            <Pagination  totalPages={totalPages} currentPage={currentPage} handlePageChange = {setCurrentPage}/>
        </div>
    );
};

export default ShopPage;