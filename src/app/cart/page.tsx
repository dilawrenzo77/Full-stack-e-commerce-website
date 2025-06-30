"use client"
import InspectionCard from "@/components/inspectionCard";
import Navbar from "@/components/navbar";
import { useCart } from  "@/Context/cartContext";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";



export default function cart() {
    const { cart, clearCart } = useCart();
  const cartLength = cart.length;


    if (!cart) {
        return <div className="w-full text-xl font-cinzel bg-black opacity-75 text-white">Loading...</div>;
    } 

    return(
        <>
            <div className="w-full fixed top-[-5] z-99 invisible sm:visible">
                <Navbar />
            </div>
            <div className="flex visible sm:invisible items-center justify-between w-full px-6 py-3 mt-[-100]">
                    <Link href="/" ><button className="">Home</button></Link>
                    <div className="bg-neutral-100 rounded-full p-0.5 relative cursor-pointer hover:opacity-80">
                        <TbShoppingBag size={20} className="text-neutral-950"/>
                        {cartLength > 0 && <span className="font-cinzel font-bold text-purple-800 text-xs absolute top-1 right-[-2] ">{cartLength}</span>}
                    </div>
                </div>
            <div className="flex flex-col items-center justify-center mt-10 gap-8">
                  {cart.length > 0 ? cart.map(item => <InspectionCard key={item.prodId} data={item}/>) : 
            <div className="mt-5 h-screen flex flex-col items-center justify-center gap-10">
                <p className="text-xl font-bold font-cinzel">No items in the cart</p>
                <MdOutlineRemoveShoppingCart size={50} className="text-purple-700"/>
                </div>}

            {cart.length > 0 && 
            <div className="flex items-center justify-center gap-10">
                <button className="font-semibold font-cinzel border border-purple-800 border-solid px-3 mb-4 rounded-full text-neutral-950 hover:text-white hover:bg-purple-700 flex items-center justify-center gap-1 transition-all duration-300" onClick={clearCart}><span><MdOutlineRemoveShoppingCart size={10} /></span>clear </button>
                <Link href="/checkOut" ><button className="font-semibold font-cinzel border bg-purple-700 px-3 mb-4 rounded-full text-white hover:text-black hover:bg-white transition-all duration-300">CheckOut</button></Link>
            </div>}
            </div>
        </>
    )
};