


import { useLoaderData } from 'react-router-dom';
import ShowLamorgini from './ShowLamorgini';

const Lamborghini = () => {
  const cars =useLoaderData()
 const metchCar = cars.filter(car=>car.Brand == 'Lamborghini')
  console.log(metchCar);
//   const car = cars.map(car=>console.log(car.Brand))


  return (
    <div className='grid md:grid-cols-2 gap-4  mt-6 '>
        {
            metchCar.map(car=><ShowLamorgini key={car._id} car={car}></ShowLamorgini>)
        }
    </div>
  );
};

export default Lamborghini;
