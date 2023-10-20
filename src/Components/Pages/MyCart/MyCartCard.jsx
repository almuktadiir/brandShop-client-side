import PropTypes from 'prop-types'
import Swal from 'sweetalert2';

const MyCartCard = ({ cartItems, cart, setCart }) => {
    const { brand, description, image, price, name, _id } = cartItems;

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/cartproducts/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
                // remove from UI
                const remaining = cart.filter(cartProducts => cartProducts._id !== id);
                setCart(remaining);
            }
            console.log(data);
        })
    }

    return (
        <div className="relative flex w-full md:h-96 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                    src={image}
                    alt="image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                    Brand Name: {brand}
                </h6>
                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Product Name: {name}
                </h4>
                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Price: ${price}
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {description}
                </p>

                <button
                    onClick={()=>handleDelete(_id)}
                    className="flex select-none items-center gap-3 rounded-lg border border-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-dark="true"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MyCartCard;

MyCartCard.propTypes = {
    cartItems: PropTypes.object,
    cart: PropTypes.array,
    setCart: PropTypes.func
}