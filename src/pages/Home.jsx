
import HeroCarousel from '../Components/Home/Carousel/HeroCarousel';
import Category from '../Components/Home/Category/Category';
import DiscountSection from '../Components/Home/Discounts/DiscountSection';
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