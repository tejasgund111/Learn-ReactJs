import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {cart.length > 0 ? (
        <div className="flex flex-col gap-6">
          {/* Cart Items Section */}
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-6 border-t border-gray-300 pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Your Cart</div>
                <div className="text-gray-600">Summary</div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Total Items: {cart.length}</p>
                <p className="text-green-600 font-semibold text-lg">${totalAmount.toFixed(2)}</p>
              </div>

              <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300 ease-in">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <h1 className="text-xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
