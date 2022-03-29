import {useEffect} from 'react';
import Promo from '../shared/components/UI/PromoSections'
import Category from '../shared/components/UI/CategoryPreviews'
import Slider from '../shared/components/UI/Slider'
import axios from 'axios';

// import  ShoppingCarts from '../shared/components/UI/ShoppingCarts'
const Home = () => {
 
 
    return (

         <>
         <Slider/>
         <Promo />
         <Category />
         </> 
       
    );
};

export default Home;