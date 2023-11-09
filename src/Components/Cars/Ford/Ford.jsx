import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowFord from './ShowFord';

const Ford = () => {
    const cars =useLoaderData()
    const metchCar = cars.filter(car=>car.Brand == 'Ford')
     console.log(metchCar);
    return (
        <div>
              <div className='grid md:grid-cols-2 gap-4  mt-6 '>
        {
            metchCar.map(car=><ShowFord key={car._id} car={car}></ShowFord>)
        }
    </div>
        </div>
    );
};

export default Ford;