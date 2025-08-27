import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

const useFetchProducts = (currentPage, priceRange, selectedCategory) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}${selectedCategory ? `&category_id=${selectedCategory}` : ''}`;
    //   if (selectedCategory) {
    //         url += `&category_id=${selectedCategory}`;
    //     }
    //     console.log("Fetching:", url);

      try {
        const response = await apiClient.get(url);
        const data = response.data;

        setProducts(data.results);
        const pageSize = data.results.length > 0 ? data.results.length : 1;
        setTotalPages(Math.ceil(data.count / pageSize));
       
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [currentPage, priceRange, selectedCategory]);

  return { products, loading, error, totalPages };
};

export default useFetchProducts;
