import CarouselSlide from '../Components/Carousel/CarouselSlide';
import HeroCarousel from '../Components/Carousel/HeroCarousel';
import Features from '../Components/Features';
import Products from '../Components/Products/Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Products/>
        </div>
    );
};

export default Home;