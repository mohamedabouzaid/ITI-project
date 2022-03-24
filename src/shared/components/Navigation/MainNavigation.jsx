import StoreNavigation from './StoreNavigation'
import ShoppingCarts from '../UI/ShoppingCarts'

const MainNavigation = () => {
    const handleShoppingCart=()=>{console.log('done');}
    return (
       <>
        <ShoppingCarts handleShoppingCart={handleShoppingCart} />
        <StoreNavigation />
        </>
    );
};

export default MainNavigation;