"use client"
import { TbShoppingBag } from "react-icons/tb";
import Link from "next/link";
import { useCart} from "@/Context/cartContext";



export default function navbar(){
    const { cart } = useCart();
    const cartLength = cart.length;
    console.log(cartLength, "item number in cart");


    return <div >
        <div className="flex items-center justify-center gap-5 bg-neutral-950/60 backdrop-blur-lg px-3 py-1 rounded-full mx-auto mt-5 max-w-[85%]">
            <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                <Link href="/products" className="font-thin text-neutral-100 sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:opacity-80">Products</Link>
                <p className="font-thin text-neutral-100 sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:opacity-80">Collections</p>
                <Link href="/about" className="font-thin text-neutral-100 sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:opacity-80">About Us</Link>
                <Link href="/contacts" className="font-thin text-neutral-100 sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:opacity-80">Contacts</Link>
            </div>
            <Link href="/cart">
                <div className="bg-neutral-100 rounded-full p-0.5 relative cursor-pointer hover:opacity-80">
                    <TbShoppingBag size={20} className="text-neutral-950"/>
                    {cartLength > 0 && <span className="font-cinzel font-bold text-purple-800 text-xs absolute top-1 right-[-2] ">{cartLength}</span>}
                </div>
            </Link>
            </div>
        </div>
}