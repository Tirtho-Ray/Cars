import Swal from "sweetalert2";


const AddProduct = () => {

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
        const AllBrands ={Picture,Brand,Type,Model,Price, description ,Rating}
        console.log(AllBrands);
        fetch('http://localhost:5000/AddProduct',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(AllBrands)
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
            <h2 className="text-3xl text-center text-bold mb-4 font-extrabold">Add A Car</h2>
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
                                <input type="text" name="Picture" placeholder="Picture url" className="input input-bordered" />
                            </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Brand</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="Brand" placeholder="Brand" className="input input-bordered" />
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
                                <input type="text" name="Type" placeholder="Enter car Type" className="input input-bordered" />
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
                    </div>
                    <div>
                      <input type="submit" value="Add Automobile" className="btn btn-block mt-4"/>
                    </div>
            </form>
        </div>
        </div>
    );
};

export default AddProduct;