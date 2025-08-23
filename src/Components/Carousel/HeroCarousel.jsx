import book from "../../assets/elin-melaas-6gjiUmp2k_8-unsplash-removebg-preview.png"
import fashion from "../../assets/freestocks-_3Q3tsJ01nc-unsplash-removebg-preview.png"
import technology from "../../assets/yash-menghani-ejLp_lrQvyI-unsplash-removebg-preview.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel = () => {
    const slides = [
        {
            title: "This Fine Print Book Collections",
            subtitle: "Discount avaiable. Grab it now!",
            image: book,
        },
        {
            title: "Exclusive Fashion Collections",
            subtitle: "A specialists label creating luxary essentials!",
            image: fashion,
        },
        {
            title: "Your Digital World, Connected",
            subtitle: "Explore a range of devices for seamless living",
            image: technology,
        }
    ]
    
  return (
    <>
      <Swiper
        
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide,index) => (
            <SwiperSlide key={index}>
            <CarouselSlide title={slide.title} subtitle={slide.subtitle} image={slide.image}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroCarousel;