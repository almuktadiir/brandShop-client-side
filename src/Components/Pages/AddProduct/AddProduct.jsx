import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault()
        
        const form = new FormData(e.target);
        const productName = form.get('productName');
        const brand = form.get('brand');
        const imageURL = form.get('image');
        const productType = form.get('productType');
        const price = form.get('price');
        const rating = form.get('rating');
        const description = form.get('description');
        const Product = {productName, brand, imageURL, productType, price, rating, description}
        console.log(Product );

        fetch('https://brand-shop-server-1fq9cdch1-almuktadiir.vercel.app/addproduct',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(Product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Product added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  e.target.reset();
            }
            console.log(data);
        })
        
    }

    return (
        <div className="max-w-7xl mx-auto my-10 text-center bg-[#ebf6e2ff] shadow-lg p-5 rounded-lg">
            <h2 className="mb-3 font-montez font-semibold text-xl">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="flex gap-6 mb-3">
                    <input type="text" name="productName" placeholder="Product name" className="input input-bordered input-warning w-1/2" />
                    <input type="text" name="brand" placeholder="Brand name" className="input input-bordered input-warning w-1/2" />
                </div>
                <div className="flex gap-6 mb-3">
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered input-warning w-1/2" />
                    <input type="text" name="productType" placeholder="Product type" className="input input-bordered input-warning w-1/2" />
                </div>
                <div className="flex gap-6 mb-3">
                    <input type="number" name="price" placeholder="$ Price" className="input input-bordered input-warning w-1/2" />
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-warning w-1/2" />
                </div>
                <div className="text-center mb-3">
                    <textarea name="description" id="" cols="30" rows="20" className="input input-bordered input-warning w-1/2" placeholder="Short Description"></textarea>
                </div>
                <input type="submit" value="Add Product" className="w-1/4 text-center btn btn-warning btn-outline mx-auto text-lg" />
            </form>
        </div>
    );
};

export default AddProduct;