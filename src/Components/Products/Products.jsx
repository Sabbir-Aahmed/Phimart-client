import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://phimart-psi.vercel.app/api/v1/products/")
      .then((res) => setProducts(res.data.results));
  }, []);
  return (
    <section className="mx-auto bg-gray-50 py-16">

        <div className="flex justify-between items-center px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Trending Products</h2>
            <a href="#" className="btn btn-secondary px-6 py-6 rounded-full text-lg">View All</a>
        </div>
        {/* Product slider */}
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            breakpoints={{
                640: {slidesPerView: 2},
                1024: {slidesPerView: 3},
            }}
            className="mt-4 px-4 container"
            >
            {products.map((product) => (
                <SwiperSlide key={product.id} className="flex justify-center">
                <ProductCard key={product.key} product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};

export default Products;
