
import { useLoaderData } from 'react-router-dom';
import ShowBmw from './ShowBmw';

const Bmw = () => {
    const cars =useLoaderData()
 const metchCar = cars.filter(car=>car.Brand == 'Bmw')
  console.log(metchCar);
    return (
        <div className='grid md:grid-cols-2 gap-4  mt-6 '>
        {
            metchCar.map(car=><ShowBmw key={car._id} car={car}></ShowBmw>)
        }
    </div>
    );
};

export default Bmw;