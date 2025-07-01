"use client"
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import Link from "next/link";
import axios from "axios";
import { useCart} from "@/Context/cartContext";
import { TbShoppingBag } from "react-icons/tb";
// import imgData from "@/lib/images/imgData";


export default function Products() {
  const [allProducts, setAllProducts] = useState();
  const { cart } = useCart();
  const cartLength = cart.length;


  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get("/products/api");
        const results = await response.data;
        setAllProducts(results);
        }catch(error){
        console.error(error, "this error arose from fetching the products data");
      }
    }
    fetchData();
  },[])

  type Product = {
    category: string,
    description: string,
    materials: string,
    price: number,
    prodId: number,
    prodName: string;
    quantity: number
    // ...
  };
  console.log(allProducts,"...");
   if (!allProducts) {
        return <div className="w-full h-screen flex items-center justify-center text-xl font-cinzel bg-black opacity-75 text-white">Loading...</div>;
    } 

    

    return(
        <div className="relative flex flex-col items-center justify-center gap-5 mt-15 mb-10">
            <div className="w-full fixed top-[-5] z-99 invisible sm:visible">
                <Navbar />
            </div>
            <div className="flex visible sm:invisible items-center justify-between w-full px-6 py-3 mt-[-45]">
                    <Link href="/" ><button className="">Home</button></Link>
                    <div className="bg-neutral-100 rounded-full p-0.5 relative cursor-pointer hover:opacity-80">
                        <TbShoppingBag size={20} className="text-neutral-950"/>
                        {cartLength > 0 && <span className="font-cinzel font-bold text-purple-800 text-xs absolute top-1 right-[-2] ">{cartLength}</span>}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <p className="font-bold text-2xl">VELDT PRODUCTS</p>
                    <p className="text-xs text-neutral-500 text-center">Explore from a wide range of classy and timeless pieces</p>
                </div>
                <div className=" w-[90%] flex flex-col items-center sm:grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 pl-8">
                    {allProducts && (allProducts as Product[]).map((product:Product) => {
                    return <Card key={product.prodId} data={product} />
                    })}
                </div>
                <Link href="/"><button className="px-4 bg-neutral-800 text-neutral-200 hover:text-black hover:bg-white rounded-full shadow-neumorphism transition-all duration-500 mb-10">Home</button></Link>
        </div>)
};
