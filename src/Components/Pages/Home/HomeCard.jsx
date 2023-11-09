import { useLoaderData } from "react-router-dom";
import ShowBrand from "./ShowBrand";


const HomeCard = () => {
    const brandLogo = useLoaderData()
  return (
    <>
    <div className="grid md:grid-cols-2  lg:grid-cols-3 px-8 ">
        
         {
            brandLogo.map(logo=><ShowBrand key={logo._id} logo={logo}></ShowBrand>)
        }
    </div>
    </>
   
  );
};


export default HomeCard;
