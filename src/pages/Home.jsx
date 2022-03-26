import React from 'react';
import Promo from '../shared/components/UI/PromoSections'
import Category from '../shared/components/UI/CategoryPreviews'
import Products from '../shared/components/UI/proList'
import Slider from '../shared/components/UI/Slider'
// import  ShoppingCarts from '../shared/components/UI/ShoppingCarts'
const Home = () => {
    return (
       
         <>
        
         <Slider/>
         <Promo />
         <Category />
         <Products />
         </> 
       
    );
};

export default Home;