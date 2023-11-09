
import { Link } from 'react-router-dom';


const ShowFord = ({car}) => {
    // const {Brand,Slider,Rating,Price,Picture,_id,Model,_id
    // }=car
    const {Brand,Slider,Rating,Price,Picture,_id,Model,description,Type}=car;
    
    return (
        <div> 
          <div className="card card-compact w-72 md:w-80 lg:w-[500px] bg-base-100 shadow-xl mx-auto ">
            <figure><img src={Picture} alt="Shoes"  className='rounded-md h-96 lg:w-[500px]'/></figure>
            <div className="card-body">
                <h2 className='mt-3 font-serif font-bold text-xl text-center mb-2'>{Brand}</h2>
                <h2 className="card-title font-mono font-bold">{Type}</h2>
                <p>{description}</p>
                <div className='flex justify-between font-serif font-bold mt-2 text-[10px] md:text-[14px] text-red-500'>
                    <div>
                        <p>Price: {Price}</p>
                    </div>
                    <div>
                        <p>Rating: {Rating}</p>
                    </div>
                    <div>
                        <p>Model: {Model}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                <Link to={`/Details/${_id}`}>
                <button className="px-4 py-2 bg-blue-400 rounded-lg mx-auto mt-3">Details</button>
                </Link>
              <Link to={`/UpdateInfo/${_id}`}>
                 <button className="px-4 py-2 bg-blue-400 rounded-lg mx-auto mt-3">Update</button>
              </Link>
                </div>
            
            </div>
            </div>
            
        </div>
    );
};

export default ShowFord;