import Image from "next/image";
import Hero2 from "@/assets/veldt/hero2.jpg";
import { useCart } from "@/Context/cartContext";
import imgData from "@/lib/images";

type Product = {
    category: string,
    description: string,
    materials: string,
    price: number,
    prodId: number,
    prodName: string,
    quantity: number;
    // ...
  };

type CardProps = {
    data : Product
}

export default function inspectionCard({data} : CardProps) {
    const { addToCart, removeFromCart, updateQuantity } = useCart();

    const findImage = imgData.find((item) => item.imgName === data.prodName);

    return(
        <>
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center mt-20 bg-gray-100">
                <div className="bg-gray-300 px-3 flex flex-col items-start justify-center gap-1 py-4 h-full w-full">
                    <div className="flex items-center justify-between w-full gap-12">
                        <p className="font-bold font-cinzel text-lg">{data.prodName}</p>
                        <p className="font-thin text-[0.4rem] text-neutral-700 px-2 rounded-full bg-purple-300">{data.category}</p>
                    </div>
                    <p className="font-thin text-xs font-cinzel">{data.description}</p>
                    <p className="font-thin  text-[0.4rem] text-neutral-600 px-2  w-max rounded-full bg-neutral-400">dispatched: <span className="text-neutral-100">3weeks</span></p>
                    <p className="text-xs">Price per item: <span className="text-xs">{data.price}</span></p>
                    <div className="flex items-center justify-between px-4 w-full">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[0.5rem] font-cinzel">Quantity</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="font-cinzel text-xs text-neutral-100 px-3 bg-purple-500 rounded-full cursor-pointer" onClick={() => updateQuantity(data.prodId, data.quantity - 1)}>-</span>
                                <span className="text-sm font-cinzel">{data.quantity}</span>
                                <span className="font-cinzel text-xs text-neutral-100 px-3 bg-purple-500 rounded-full cursor-pointer" onClick={() => addToCart(data)}>+</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[0.5rem] font-cinzel">Total Price</p>
                            <div>
                                <span className="text-sm">{data.quantity * data.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full gap-2">
                        <button className="font-thin text-xs w-full py-0.5 border border-purple-600 border-solid rounded-full" onClick={() => removeFromCart(data.prodId)}>Remove</button>
                        <button className="font-thin text-xs w-full py-0.5 bg-purple-600 rounded-full">Buy Now</button>
                    </div>
                </div>
                <div className="w-full h-full relative">
                    <Image src={`${findImage?.img}`} width={200} height={200} alt="cart product" className="w-full"/>
                </div>
            </div>
        </>
    )
};
