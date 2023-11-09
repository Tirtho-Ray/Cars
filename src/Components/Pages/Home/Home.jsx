import Chosen from "./Chosen";
import HomeCard from "./HomeCard";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <div className="mt-4 font-bold text-center md:mt-12 md:ml-2">
                <p className="text-3xl ml-2  lg:text-7xl tex font-serif">See <span className="text-red-500">Your</span> Next </p>
                <p className="text-3xl ml-2  lg:text-7xl mt-3 font-serif"> Classic <span className="text-red-500">Car</span></p>
            </div>
            <div className="grid items-center font-bold md:grid-cols-3 mt-5 md:mt-12 ">
                <div className="w-full col-span-2 ">
                    <Slider></Slider>
                </div>
                <div className=" text-xl  text-center mt-3 mx-auto text-[12px] md:text-[18px] lg:text-[22px] px-5 md:px-0">
                    <p>We are passionate about collector  cars and providing quality Agreed Values classic car insurance that  that's br best bang for your buck</p>
                </div>
            </div>
            <div><h1 className=" mt-12 md:mt-24 md:mb-16 mb-8 text-4xl text-center font-serif font-bold">CHOSEN YOUR BRAND</h1></div>
            <HomeCard></HomeCard>
            {/* <p className="text-2xl font-bold text-center mt-12 md:mt-16">WHY CHOSEN US</p> */}
            <Chosen></Chosen>
        </div>
    );
};

export default Home;