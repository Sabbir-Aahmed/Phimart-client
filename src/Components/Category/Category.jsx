import { useEffect, useState } from 'react';
import apiClient from '../../Services/api-client';
import CategoryItems from './CategoryItems';

const Category = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        apiClient.get('/categories').then(res => setCategories(res.data))
    }, [])
    return (
        <section className='px-2 py-12 max-w-7xl mx-auto '>
            {/* category heading  */}
            <div className='flex justify-between items-center px-4 md:px-8 mb-8'>
                <h2 className="text-3xl md:text-4xl font-bold">Brouwse Categories</h2>
                <a href="#" className="btn btn-secondary px-6 py-6 rounded-full text-lg">View All</a>
            </div>
            {/* category grid  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {categories.map((category, index) => (
                    <CategoryItems key={category.id} index={index} category={category}/>
                ))}
            </div>
        </section>
    );
};

export default Category;