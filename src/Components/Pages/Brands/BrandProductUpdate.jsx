import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const BrandProductUpdate = () => {
    const brandProducts = useLoaderData();
    const {id} = useParams();

    const findProduct = brandProducts.find(singleProduct => singleProduct._id === id);
    console.log(findProduct, id);

    const { brand, description, imageURL, price, productName, productType, rating, _id } = findProduct;

    const handleUpdateProduct = e => {
        e.preventDefault();
        
        const form = new FormData(e.target);
        const productName = form.get('productName');
        const brand = form.get('brand');
        const imageURL = form.get('image');
        const productType = form.get('productType');
        const price = form.get('price');
        const rating = form.get('rating');
        const description = form.get('description');
        const updateProduct = {productName, brand, imageURL, productType, price, rating, description}
        console.log(updateProduct );

        fetch(`https://brand-shop-server-1fq9cdch1-almuktadiir.vercel.app/products/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                Swal.fire({
                    title: 'Product update successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data);
        })
    }

    return (
        <div className="max-w-7xl mx-auto my-10 text-center bg-[#ebf6e2ff] shadow-lg p-5 rounded-lg">
            <h2 className="mb-3 font-montez font-semibold text-xl">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="flex gap-6 mb-3">
                    <input type="text" name="productName" placeholder="Product name" className="input input-bordered input-warning w-1/2"  defaultValue={productName}/>
                    <input type="text" name="brand" placeholder="Brand name" className="input input-bordered input-warning w-1/2"  defaultValue={brand}/>
                </div>
                <div className="flex gap-6 mb-3">
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered input-warning w-1/2"  defaultValue={imageURL}/>
                    <input type="text" name="productType" placeholder="Product type" className="input input-bordered input-warning w-1/2"  defaultValue={productType}/>
                </div>
                <div className="flex gap-6 mb-3">
                    <input type="number" name="price" placeholder="$ Price" className="input input-bordered input-warning w-1/2"  defaultValue={price}/>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-warning w-1/2"  defaultValue={rating}/>
                </div>
                <div className="text-center mb-3">
                    <textarea name="description" id="" cols="30" rows="20" className="input input-bordered input-warning w-1/2" placeholder="Short Description" defaultValue={description}></textarea>
                </div>
                <input type="submit" value="Update Product" className="w-1/2 md:w-1/4 text-center btn btn-warning btn-outline mx-auto text-lg" />
            </form>
        </div>
    );
};

export default BrandProductUpdate;