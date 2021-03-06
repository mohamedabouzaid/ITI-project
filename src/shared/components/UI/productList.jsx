
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
const proLink='/product/'

/*const products = [
    {
      id: 1,
      name: 'BasicTee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'BasicTee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'BasicTee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
     
      {
        id: 4,
        name: 'BasicTee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      
    // More products...
  ]
*/
const ProList = (props) => {
  const {sectionName,sub}=props
 const [products,setProduct]=useState(undefined)

  
    useEffect(()=>{
      axios.get(`http://localhost:3000/subcategory/${sub}`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      }).then((res) => {
  
        setProduct(res.data.data.products)
      
      })
     },[sub])
 
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
      <> {products &&<div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         { sectionName && <h2 className="text-4xl text-center font-extrabold tracking-tight text-indigo-600">{sectionName}</h2>}
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.photo}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link  to={proLink+product.name}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.vendorName}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">EGP:{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
}</> 
    );
};

export default ProList;

