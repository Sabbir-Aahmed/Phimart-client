
import bgimg from "../../../assets/bg.jpg"


const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className="w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8
        "style={{backgroundImage: `url(${bgimg})`}}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/70 to-pink-200/70"></div>

            <div className="relative z-10 text-white text-3xl font-bold">
                <div className="max-w-6xl flex flex-col md:flex-row items-center justify-around " >
                    {/* left content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
                        <p className="text-lg text-gray-700 my-4 ">{subtitle}</p>
                        <button className='btn btn-secondary px-6 py-3 rounded-full'>Shop Product</button>
                    </div>

                    {/* right content */}
                    <div className="w-full md:w-1/2 flex justify-center py-8">
                        <img className="max-w-full md:max-w-md drop-shadow-xl " src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;