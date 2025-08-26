import { useEffect, useState } from "react"
import apiClient from "../Services/api-client"

const useFetchProducts = (currentPage) => {

    const [products,setProducts] =useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState("")
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
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
            fetchProduct()
    },[currentPage])

    return {products,loading,error,totalPages}
}

export default useFetchProducts