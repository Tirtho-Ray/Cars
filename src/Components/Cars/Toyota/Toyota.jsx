import { useLoaderData } from "react-router-dom";
import ShowToyota from "./ShowToyota";


const Toyota = () => {
    const cars =useLoaderData()
 const metchCar = cars.filter(car=>car.Brand == 'Toyota')
  console.log(metchCar);
    
    return (
        <div className='grid md:grid-cols-2 gap-4  mt-6 '>
        {
            metchCar.map(car=><ShowToyota key={car._id} car={car}></ShowToyota>)
        }
    </div>
    );
};

export default Toyota;