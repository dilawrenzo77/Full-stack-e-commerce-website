"use client"
import Navbar from "@/components/navbar";
import { useState, useEffect} from "react";
import Link  from "next/link";
import  React from "react";
import axios from "axios"; 
import Card from "@/components/card";
import { useCart} from "@/Context/cartContext";
import { TbShoppingBag } from "react-icons/tb";

export default function Collections( {params}: {
    params: Promise<{ collection: string }>
})
{
    const { collection } = React.use(params);
    const [collectionProducts, setCollectionProducts] =useState<any[]>([]);
    const { cart } = useCart();
      const cartLength = cart.length;


  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get("collection/api");
        const results = await response.data;
        setCollectionProducts(results);
      }catch(error){
        console.error(error, "this error arose from fetching the collection products data");
      }
    }
    fetchData();
  },[])

    if (!collectionProducts) {
        return <div>Loading...</div>;
    }    

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

    
    const filteredCollection = collectionProducts.filter(item => 
    item.category.toLowerCase().includes(collection.toLowerCase())
    );
    console.log(filteredCollection, "this is our filtered item ");

    return(
        <div className="relative">
            <div className="fixed top-[-5] w-full z-99 invisible sm:visible">
                <Navbar />
            </div>
            <div className="flex visible sm:invisible items-center justify-between w-full px-6 py-3">
                    <Link href="/" ><button className="">Home</button></Link>
                    <div className="bg-neutral-100 rounded-full p-0.5 relative cursor-pointer hover:opacity-80">
                        <TbShoppingBag size={20} className="text-neutral-950"/>
                        {cartLength > 0 && <span className="font-cinzel font-bold text-purple-800 text-xs absolute top-1 right-[-2] ">{cartLength}</span>}
                    </div>
                </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-15">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-xl">{collection} Collection</p>
                    <p className="text-xs">This is a brief description of the collection in question</p>
                </div>
                <div className=" w-[90%] grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 pl-8">
                    {filteredCollection && (filteredCollection as Product[]).map((product:Product) => {
                    return <Card key={product.prodId} data={product}/>
                    })}
                </div>
                <Link href="/"><button className="font-semibold font-cinzel border border-purple-700 border-solid px-5 mb-4 rounded-full text-gray-500 hover:text-black">back</button></Link>

            </div>
        </div>
    )
};




