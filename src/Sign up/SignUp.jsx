import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const {createUser, google} =useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();  const [successMessage, setSuccessMessage] = useState(''); // State for success message
    

    const handelSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value
        const password =e.target.password.value;
        const name = e.target.name.value
   

        const passwordRegex = /^(?=.*[a-zA-Z\d]).{6,}$/;
        if (!password.match(passwordRegex)) {
            const err = "Password must be at least 6 characters";
            setError(err);
            return; 
        }
        
    
        setError('');

        createUser(email, password)
        .then(result =>{
            
            console.log(result);
            e.target.reset()
            setSuccessMessage('User created successfully.'); 
            navigate('/') 
        })
        .catch(err=>{
            console.log(err);
        })

    }
    const handelGoogleLogin=()=>{
        google()
        .then(result =>{
            result.success
            setSuccessMessage('User created successfully.');
            navigate('/') 
        })
        .catch(err=>{
                console.log(err);
        })
    }
    return (
        <div>
             <div className='mb-12'>
              <div>
            <div className="hero  bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={ handelSubmit} >
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="Enter your name"required className="input input-bordered" />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email"required className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" required className="input input-bordered" />
               
                </div>
                {/* set err meassage */}
                {error && <p className="text-error">{error}</p>}
                <p>{successMessage && <p className="text-success">{successMessage}</p>}</p>
                <div className="form-control mt-6">
                <button className="px-2 py-2 bg-gray-400">Sign Up</button>
                <p>Already have an account <Link to="/login">
                <button className="btn btn-link">Login</button>
                </Link></p>
            </div>
           </form>
           <div>
                <button onClick={handelGoogleLogin} className='btn btn-secondary'>Google</button>
           </div>
               
        </div>
        </div>
    </div>
    </div>
            </div>
        </div>
            
        </div>
    );
};

export default SignUp;