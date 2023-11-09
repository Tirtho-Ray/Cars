import { Link, useLoaderData} from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    console.log(details);
    const {Brand,Rating,Price,Picture,_id,Model,description,Type}=details;
   
    return (
        <div className="mt-6 md:mt-12">
            <div className="grid md:grid-cols-2">
                <div>
                <img className="w-[900px] h-72 px-2 rounded-lg" src={Picture} alt="Car"/>
                </div>
                <div>
                <div className="card-body">
                <h2 className="card-title ">{Brand}</h2>
                <p className="font-bold">Type:{Type}</p>
                <p className="text">Model:{Model}</p>
                <p>Price:{Price}</p>
                <p>Rating:{Rating}</p>
                <p className="px-12">{description}</p>
                <div className="card-actions justify-end">
                <Link to={`/myCart/${_id}`}>
                <button className="px-3 py-2 bg-yellow-300 rounded-xl">Add Cart</button>
                </Link>
               
                </div>
            </div>   
                </div>
            </div>
          
            </div>
      
    );
};

export default Details;