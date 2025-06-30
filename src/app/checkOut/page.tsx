"use client"
import Navbar from "@/components/navbar";
import { useCart} from "@/Context/cartContext";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";

export default function checkOut() {
    const { cart, totalCartItems, totalAmount } = useCart();
    const cartLength = cart.length;

    return(
        <>
            <div className="relative flex flex-col items-center justify-center">
                <div className="fixed z-99 top-[-5] inset-x-0 invisible sm:visible">
                    <Navbar />
                </div>
                <div className="flex visible sm:invisible items-center justify-between w-full px-6 py-3">
                    <Link href="/" ><button className="">Home</button></Link>
                    <div className="bg-neutral-100 rounded-full p-0.5 relative cursor-pointer hover:opacity-80">
                        <TbShoppingBag size={20} className="text-neutral-950"/>
                        {cartLength > 0 && <span className="font-cinzel font-bold text-purple-800 text-xs absolute top-1 right-[-2] ">{cartLength}</span>}
                    </div>
                </div>
                <div className="bg-gray-500 w-[70%] flex flex-col items-center justify-center gap-10 mt-20 px-2 py-6 rounded-sm shadow-neumorphism">
                    <p className="text-lg font-bold font-cinzel text-gray-200 text-center">PRODUCT CHECKOUT</p>
                    <div className="flex flex-col sm:flex-row items-start justify-between w-full  gap-1">
                        <div className="flex flex-col items-start justify-center gap-3 bg-gray-200 grow px-2 py-4 rounded-md shadow-neumorphism">
                            <p className="font-cinzel text-center sm:text-start">ITEMS</p>
                            {cart.length > 0 && cart.map(item => 
                            <div className="flex flex-col sm:flex-row items-center  gap-2  justify-center sm:justify-between bg-neutral-950 shadow-neumorphism w-full px-2 rounded-md">
                                <p className="text-gray-200">{item.prodName}</p>
                                <p className="text-gray-200">{item.price}</p>
                                <p className="text-gray-200">{item.quantity}</p>
                            </div>)}
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 px-8" >
                            <p className="font-cinzel text-gray-200">CHECKOUT</p>
                            <div>
                                <div className="flex flex-col items-center justify-center gap-1 ">
                                    <p className="font-bold text-sm text-gray-200">Total Items:</p>
                                    <p className="text-sm text-gray-200">{ totalCartItems}</p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 ">
                                    <p className="font-bold text-sm text-gray-200">Total Price:</p>
                                    <p className="text-sm text-gray-200">{totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/" ><button className="px-4 bg-neutral-800 rounded-full shadow-neumorphism text-gray-200">Purchase</button></Link>
                </div>
            </div>
        </>
    )
};
