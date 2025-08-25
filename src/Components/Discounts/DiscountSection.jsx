
import discountBackground from "../../assets/discount banner.jpg"
import discountImage from "../../assets/joshua-oluwagbemiga-n86hjWsgJW8-unsplash-removebg-preview.png"
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
    return (
        <section className="relative w-full h-[600px] bg-cover bg-center flex justify-center items-center px-4 md:px-8 overflow-hidden
        "style={{backgroundImage: `url(${discountBackground})`}}>

            <div className="absolute inset-0 bg-gradient-to-l from-cyan-100/70 via-white/70 to-pink-300/70 pointer-events-none"></div>
                <div className=" container z-10 max-w-6xl flex flex-col md:flex-row items-center justify-around">

                    {/* left content */}
                    <div className="max-w-md md:w-1/2 flex justify-center py-8 ">
                        <img className="max-w-full md:max-w-md drop-shadow-xl " src={discountImage} alt="" />
                    </div>

                    {/* right content */}
                    <div className="w-full md:w-1/2 text-center md:text-left ml-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">30% Discount On All Items. Hurry Up!!!</h1>
                        {/* countdown */}
                        <DiscountTimer/>

                        <button className='btn btn-secondary px-6 py-3 rounded-full'>Shop Collection</button>
                    </div>
                </div>
        </section>
    );
};

export default DiscountSection;