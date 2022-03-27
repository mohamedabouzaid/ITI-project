import StoreNavigation from './StoreNavigation'
import ShoppingCarts from '../UI/ShoppingCarts'
import {useState} from 'react'
const MainNavigation = () => {
    const[open,setOpen]=useState(false)
    const handleShoppingCart=()=>{setOpen(true)}
    const closeShoppingCart=()=>{setOpen(false);}
    
    return (
       <>
       { open&& <ShoppingCarts intial={open} closeShoppingCart={closeShoppingCart}  />}
       <StoreNavigation handleShoppingCart={handleShoppingCart}/>
        </>
    );
};

export default MainNavigation;