import { useLoaderData } from "react-router-dom";
import ShowTesla from "./ShowTesla.Jsx";


const Tesla = () => {
    const cars =useLoaderData()
    const metchCar = cars.filter(car=>car.Brand == 'Tesla')
     console.log(metchCar);
    return (
        <div className='grid md:grid-cols-2 gap-4  mt-6 '>
        {
            metchCar.map(car=><ShowTesla key={car._id} car={car}></ShowTesla>)
        }
    </div>
    );
};

export default Tesla;