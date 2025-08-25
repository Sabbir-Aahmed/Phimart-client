import CarouselSlide from '../Components/Carousel/CarouselSlide';
import HeroCarousel from '../Components/Carousel/HeroCarousel';
import Category from '../Components/Category/Category';
import CategoryItems from '../Components/Category/CategoryItems';
import DiscountSection from '../Components/Discounts/DiscountSection';
import Features from '../Components/Features';
import Products from '../Components/Products/Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Category/>
            <Products/>
            <DiscountSection/>
        </div>
    );
};

export default Home;