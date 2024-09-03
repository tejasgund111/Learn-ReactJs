import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 mt-4 rounded-xl shadow-lg border border-gray-200 hover:scale-105 transition duration-300 ease-in">
      <div className="w-full h-48 flex items-center justify-center">
        <img src={item.image} alt={item.title} className="h-full w-auto object-cover" />
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <p className="text-gray-700 font-semibold text-lg text-center truncate w-full">{item.title}</p>
        <p className="text-gray-400 font-normal text-sm text-center mt-1">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        <p className="text-green-600 font-semibold text-lg mt-2">${item.price}</p>
      </div>
      <div className="flex justify-center items-center w-full mt-4">
        <button
          onClick={removeFromCart}
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-sm py-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in flex items-center gap-1"
        >
          <FcDeleteDatabase className="text-lg" />
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
