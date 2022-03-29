import {useEffect} from 'react';
import CategoryFilters from '../../shared/components/UI/CategoryFilters'
import ProList from '../../shared/components/UI/proList';
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import Paggation from '../../shared/components/UI/paggation';
import axios from 'axios';
const Categories = () => {
  const [products,setProduct]=useState(undefined)
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
   if(products==undefined){
    return(<>  <div className='w-full h-96'>
    <div className="flex justify-center items-center space-x-2">
    <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="
        spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
          text-purple-500
        " role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="
        spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
          text-green-500
        " role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="
        spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
          text-yellow-500
        " role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div></div>
    </>)
}
 
    return (
        <>
      {products.length !==0 ?< CategoryFilters catName={catName} filter={<> 
      < ProList products={products} />< Paggation catName={catName} filter=
      { filter}/></> } /> : <CategoryFilters  catName={catName} filter={<>'NO PRODUCT Found'</>} />}
      
       
       </>
    );
};

export default Categories;