import {useEffect} from 'react';
import CategoryFilters from '../../shared/components/UI/CategoryFilters'
import ProList from '../../shared/components/UI/proList';
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import Paggation from '../../shared/components/UI/paggation';
import axios from 'axios';
const Categories = () => {
  const [products,setProduct]=useState([])
const {catName, filter} =useParams()
  console.log(catName);

useEffect(()=>{
    axios.get(`http://localhost:3000/subcategory/${catName}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {

      setProduct ( res.data.data.products)
    
    })
   },[catName])
 
    return (
        <>
      {products.length !==0 ?< CategoryFilters catName={catName} filter={<> 
      < ProList products={products} />< Paggation catName={catName} filter=
      { filter}/></> } /> : <CategoryFilters  catName={catName} filter={'NO PRODUCT Found'} />}
      
       
       </>
    );
};

export default Categories;