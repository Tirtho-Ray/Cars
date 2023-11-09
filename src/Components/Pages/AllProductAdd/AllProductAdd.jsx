import Swal from "sweetalert2";


const AllProductAdd = () => {

    const handelSubmit=event=>{
        event.preventDefault();
        const form =event.target;
        
        const Picture =form.Picture.value;
        const Brand =form.Brand.value;
        const Type =form.Type.value;
        const Model =form.Model.value;
        const Price=form.Price.value;
        const  description =form. description .value;
        const Rating=form.Rating.value;
        const Slider=form.Slider.value;
        const allCars ={Picture,Brand,Type,Model,Price, description ,Rating,Slider}
        console.log(allCars);
        event.target.reset();
        fetch('http://localhost:5000/AllProductAdd',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(allCars)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'users added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
             <div className="bg-blue-200 px-12  md:p-24">
            <h2 className="text-3xl text-center text-bold mb-4 font-extrabold">Add your Product</h2>
            <form onSubmit={handelSubmit}>
                {/* Picture url and Brand Name */}
                <div className="md:flex gap-3 ">
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Picture url</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Picture" required placeholder="Picture url" className="input input-bordered" />
                            </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Brand_name</span>
                                  
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Brand" required placeholder="Select your Brand" className="input input-bordered" list="cars" />
                                    <datalist id="cars">
                                    <option>Lamborghini</option>
                                    <option>Toyota</option>
                                    <option>Mercedes</option>
                                    <option>Tesla</option>
                                    <option>Ford</option>
                                    <option>Bmw</option>
                                    </datalist>
                            </label>
                            </div>
                        </div>
                </div>
                {/* Type and Model */}
                <div className="md:flex gap-3 ">
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">What Type</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Type" placeholder="Enter car Type" required className="input input-bordered" />
                            </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Model</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Model" placeholder="Model" className="input input-bordered" />
                            </label>
                            </div>
                        </div>
                </div>
                {/*Price and Short description */}
                <div className="md:flex gap-3 ">
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Price" placeholder="Price" className="input input-bordered" />
                            </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Short description</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered" />
                            </label>
                            </div>
                        </div>
                </div>
                {/* Rating */}
                <div>
                     <div className="form-control">
                     <label className="label">
                        <span className="label-text font-bold"> Rating </span>
                        </label>
                        <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Rating" placeholder=" What Rating" className="input input-bordered" />
                        </label>
                        </div>
                     <div className="form-control">
                     <label className="label">
                        <span className="label-text font-bold"> Slider_Img </span>
                        </label>
                        <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Slider" placeholder=" Slider_Img" className="input input-bordered" />
                        </label>
                        </div>
                    </div>
                    <div>
                      <input type="submit" value="Add Automobile" className="btn btn-block mt-4 mb-4"/>
                    </div>
            </form>
        </div>
        </div>
    );
};

export default AllProductAdd;