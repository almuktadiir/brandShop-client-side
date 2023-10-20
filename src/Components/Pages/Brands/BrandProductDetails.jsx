import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BrandProductDetails = () => {
    const {user} = useContext(AuthContext);

    const brandProducts = useLoaderData();
    const { id } = useParams();

    const findProduct = brandProducts.find(singleProduct => singleProduct._id === id);

    const { brand, description, imageURL, price, productName, productType } = findProduct;

    const handleAddToCart = () =>{
        console.log('click');
        const brand = findProduct.brand;
        const imageURL = findProduct.imageURL;
        const price = findProduct.price;
        const productName = findProduct.productName;
        const description = findProduct.description;
        const cartProduct = {
            brand: brand,
            image: imageURL,
            price: price,
            name: productName,
            description: description,
            email: user.email
        }
        console.log(cartProduct);

        fetch('http://localhost:5000/cartproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Added to My Cart!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data);
        })
    }

    return (

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md max-w-3xl mx-auto my-10 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img
                    src={imageURL}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {productName}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        ${price}
                    </p>
                </div>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Brand: {brand}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Product Type: {productType}
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BrandProductDetails;