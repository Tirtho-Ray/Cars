import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider';

const ShowBrand = ({ logo }) => {
    const { Brand, Picture } = logo;
    const { user } = useContext(AuthContext);

    // Set the destination route based on user existence
    const destination = user ? `/${Brand}` : "/SignUp";

    return (
        <Link to={destination}>
            <div className='mx-auto'>
                <div className="mt-4 shadow-md rounded-lg">
                    <div className="card w-64 md:w-80 lg:w-[305px] bg-base-100 shadow-sm">
                        <figure>
                            <img className='h-36 mt-5 mx-auto' src={Picture} alt="" />
                        </figure>
                        <div className="card-body mx-1 rounded-lg">
                            <h2 className="text-center font-bold text-2xl font-serif">{Brand}</h2>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ShowBrand;
