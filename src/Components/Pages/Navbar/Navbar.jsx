// import { useContext } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const{user,logOut}=useContext(AuthContext);
    const handelLogout =()=>{
        logOut()
        .then(()=>{

        })
        .catch(err=>{
            console.log(err);
            
        })
    }
    const links =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About US</NavLink></li>
        <li><NavLink to="/AllProductAdd">Add Product</NavLink></li>
        <li><NavLink to="/MyCart">MyCart</NavLink></li>
        {/* {user&&
            <>
            <li><NavLink to="/Details">Details</NavLink></li>
              <li><NavLink to="/Blog">Blog</NavLink></li>
            </>
        } */}
    </>
    return (
        <div>
            <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Aoska</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="mr-3 flex gap-2">
                <div>
                <button className="px-2 py-2 bg-yellow-300 rounded-sm font-bold md:rounded-lg text-[7px] md:text-sm">
                    <NavLink to="/SignUp">
                        Register
                    </NavLink>
                    </button>
                </div>
                    <div>
                    {
                    user? <>
                   
                    <button onClick={handelLogout} className="px-2 py-2 bg-yellow-300 rounded-sm md:rounded-lg font-bold text-[7px] md:text-sm">
                    <NavLink to="/login">
                       Log Out
                    </NavLink>
                    </button>
                    <span className=" text-[7px] ">
                        <div className="flex items-center gap-2">
                       <div>
                       {user.displayName
}
                       </div>
                        {<><img className="w-5 rounded-2xl mt-2" src={user.photoURL} alt="" />
                        </>}
                        </div>
                        </span>
                    </>
                    :
                    <button  className="px-2 py-2 bg-yellow-300 text-[7px] md:text-sm md:rounded-lg font-bold">
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    </button>
                    

                }
                    </div>
                  
                </div>
            </div>
            
            </div>
            
                    </div>
                );
};

export default Navbar;