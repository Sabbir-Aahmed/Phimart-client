import axios from 'axios';
import React, { useEffect } from 'react';

const Products = () => {
    useEffect(() => {
        axios.get("https://phimart-psi.vercel.app/api/v1/products/")
        .then((res) => console.log(res.data.results))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Products;