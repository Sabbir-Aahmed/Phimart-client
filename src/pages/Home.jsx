import CarouselSlide from '../Components/Carousel/CarouselSlide';
import HeroCarousel from '../Components/Carousel/HeroCarousel';
import DiscountSection from '../Components/Discounts/DiscountSection';
import Features from '../Components/Features';
import Products from '../Components/Products/Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Products/>
            <DiscountSection/>
        </div>
    );
};

export default Home;