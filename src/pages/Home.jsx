import {useEffect} from 'react';
import Promo from '../shared/components/UI/PromoSections'
import Category from '../shared/components/UI/CategoryPreviews'
import Products from '../shared/components/UI/proList'
import Slider from '../shared/components/UI/Slider'
import axios from 'axios';

// import  ShoppingCarts from '../shared/components/UI/ShoppingCarts'
const Home = () => {
 //top five product
   useEffect(()=>{
    axios.patch('http://localhost:3000/state',{}, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {
      console.log(res);
    })
   },[])
 
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