import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyCart = () => {
    const {user} = useContext(AuthContext);
    const currentEmail = user.email;

    const cartLoader = useLoaderData();

    const currentUserData = cartLoader.filter(cartData => cartData.email === currentEmail);
    console.log(currentUserData);
    const [cart, setCart] = useState(currentUserData);

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