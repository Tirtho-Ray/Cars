
import { useLoaderData } from 'react-router-dom';
import ShowMercedes from './ShowMercedes';

const Mercedes = () => {
    const cars =useLoaderData()
    const metchCar = cars.filter(car=>car.Brand == 'Mercedes')
     console.log(metchCar);
    return (
        <div className='grid md:grid-cols-2 gap-4  mt-6 '>
        {
            metchCar.map(car=><ShowMercedes key={car._id} car={car}></ShowMercedes>)
        }
    </div>
    );
};

export default Mercedes;