import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";


const MyCart = () => {
    const cartLoader = useLoaderData();
    const [cart, setCart] = useState(cartLoader);
    console.log(cartLoader);

    return (
        <div className="max-w-4xl mx-auto my-10 grid grid-cols-1 gap-6">
            {
                cart.map(cartItems => <MyCartCard 
                key={cartItems._id}
                cartItems={cartItems}
                cart={cart}
                setCart={setCart}
                ></MyCartCard>)
            }
        </div>
    );
};

export default MyCart;