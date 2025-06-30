"use client"
import { createContext, useContext, useState, useEffect } from "react";


//Cart item interface
interface CartItem {
    category: string;
    description: string;
    materials: string;
    price: number;
    prodId: number;
    prodName: string;
    quantity: number;
}

//Cart context interface
interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
    totalCartItems: number;
    totalAmount: number;
    clearCart: () => void;
}

//creating a cartContext with default
const CartContext = createContext<CartContextType | undefined>(undefined);

//cartProvider Component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        const checkIfExisted = cart.find((CartItem) => CartItem.prodId === item.prodId);
        if(checkIfExisted){
            setCart(
                cart.map((cartItem) => cartItem.prodId === item.prodId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
            )
        }else{
            setCart([...cart, {...item, quantity: 1}]);
        }
    }

    const updateQuantity = (id: number, quantity: number) => {
        setCart(cart.map(item => 
            item.prodId === id ? {...item, quantity} : item
        ));
    };

    const removeFromCart = (id: number) => {
        setCart((prevItem) => prevItem.filter((cartItem) => cartItem.prodId !== id));
        // console.log(cart, "check for remove items");
    }

     useEffect(() => {
    // Load from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
        }, []);

    useEffect(() => {
    // Save to localStorage when cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const clearCart = () => setCart([]);
    

    // console.log(cart, "our cart items in the context of context");
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCartItems, totalAmount, updateQuantity, clearCart }}
            >
            {children}
        </CartContext.Provider>
    );



};

// Custom hook to use Cart context
export const useCart = () => {
const context = useContext(CartContext);

// Error handling if useCart is used outside CartProvider
if (!context) {
throw new Error("useCart must be used within a CartProvider");
}
return context;
};
