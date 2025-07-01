import { TbShoppingBag } from "react-icons/tb";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useCart} from "@/Context/cartContext";
import { useState } from "react";
import imgData from "@/lib/images";

// shadcn import
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";



type Product = {
    category: string,
    description: string,
    materials: string,
    price: number,
    prodId: number,
    prodName: string; 
    quantity: number;
    // ...
  };
// 
type CardProps = {
    data : Product,
}

// interface ProductContextType{
//     addToCart: (product : Product) => void;
//     // cart: cart[];
//     totalCartAmount: number;
// }
// interface productContextType {
//     addToCart: (product: Product);
//     cart: cart[];
//     totalCartAmount: Number;
//     totalCartItems: Number;
// }


export default function Card({data}: CardProps) {
    const {addToCart, cart} = useCart();
    const [open, setOpen] = useState(false);
    const [inCart, setInCart] = useState(false);


    const cartToggle = () => {
        const prodCheck = cart.map((item) => item.prodId === data.prodId );

        if(prodCheck){
            setInCart(true);
        }
    
    }


    
    const findImage = imgData.find((item) => item.imgName === data.prodName);
    
    

        return <div>
            <div className="bg-neutral-950 shadow-neumorphism w-[10rem] flex flex-col items-center justify-center gap-2 p-0.5 rounded-md hover:scale-105 transition-all duration-500">
                <div className=" bg-purple-500 w-full flex flex-col items-center justify-between gap-30 px-1 py-1 rounded-md relative">
                    <Image src={`${findImage?.img}`}  width={200} height={300} alt="hero" className="w-full h-full object-cover rounded-md absolute top-0 z-auto"/>
                    <div className="w-full flex items-center justify-end z-10">
                        <TbShoppingBag size={20} 
                        className={inCart === false ? "text-neutral-950 p-0.5 rounded-full bg-white" : "text-neutral-950 bg-white p-0.5 fill-red-600 rounded-full"}
                        onClick={() => {addToCart(data); cartToggle();}}
                        />
                    </div>
                    <div className="w-full flex items-center justify-between z-10">
                        <div className="flex items-center justify-between gap-8 p-0.5 pl-2 bg-neutral-950 group  hover:bg-neutral-100  rounded-2xl transition-all duration-500" onClick={() => setOpen(true)}>
                            <p className="text-[0.6rem] text-neutral-300 group-hover:text-black">View</p>
                            <IoIosArrowRoundForward size={18} className="text-neutral-950 group-hover:text-white group-hover:bg-black p-0.5 rounded-full bg-neutral-50"/>
                        </div>
                        <span className="px-2 py-1 bg-neutral-950 rounded-2xl text-[0.5rem] text-neutral-100 hover:bg-white hover:text-black transition-all duration-500">&#8358;{data.price}</span>
                    </div>
                    </div>
                    <div className="bg-gray-500 flex flex-col items-center justify-between w-full rounded-md">
                        <div className="flex flex-col items-center justify-center gap-0.5 w-full rounded-md px-0.5">
                            <p className="text-xs text-neutral-200">{data.prodName}</p>
                            <p className="text-[0.5rem] text-neutral-300 text-center">{data.description}</p>
                        </div>
                        <p className="text-xs text-neutral-300">100ml</p>
                    </div>
                </div>
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger></DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <div className="flex items-center justify-center">
                                <Image src={`${findImage?.img}`} width={180} height={300} alt="product" className="rounded-lg"/>
                            </div>
                        <DrawerTitle className="text-sm font-cinzel">{data.prodName}</DrawerTitle>
                        <DrawerDescription className="text-xs font-cinzel">{data.materials}</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                        <DrawerClose>
                            <button className="font-semibold font-cinzel border border-purple-800 border-solid px-5 mb-4 rounded-full text-gray-500 hover:text-black">close</button>
                        </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                    </Drawer>
            </div>
    
};
