import { createContext,useContext,useEffect,useState } from "react"
export const cartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    //Saving items to local storage whenever cart changes
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
    //Load items from local storage after reloading
    useEffect (() => {
        const savedCart=localStorage.getItem("cart")
        if(savedCart) {
            setCart(JSON.parse(savedCart))
        }
    },[])
    // Add item to cart
    const addToCart = (item) => {
    setCart((prevCart) => {
        // Check if item is already in cart
        //'prod' is each individual product object
        const exists = prevCart.find((prod) => prod.id === item.id);
        if (exists) {
        // if it exists, increase quantity
        return prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
            );
        } 
        else {
        // If not, add it with quantity 1
        return [...prevCart, { 
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1,
            image: item.images[0]
         }];
        }
    });
    };

    // Subtract (remove one quantity) or remove item from cart
    const removeFromCart = (id) => {
    setCart((prevCart) => {
        //if existing or not
        const existing = prevCart.find((prod) => prod.id === id);
        if (!existing) return prevCart;

        if (existing.quantity === 1) {
            // Remove completely if only one left
            return prevCart.filter((prod) => prod.id !== id);
            } 
        else {
            // Otherwise, subtract 1
            return prevCart.map((prod) =>
            prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
                );
        }
    });
    };
    //remove all of an item
    const deleteFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((prod) => prod.id !== id))
    }
    //calculate total price
    const calculateTotal = (cartList) => {
        let total=0
        cartList.map((prod) => (
            total += prod.price * prod.quantity
        ))
        return total.toFixed(2)
    }
    return (
        <cartContext.Provider value={{cart,setCart,addToCart,removeFromCart,deleteFromCart,calculateTotal}}>
            {children}
        </cartContext.Provider>
    )
}
