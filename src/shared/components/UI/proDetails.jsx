import { useState,useEffect } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import ProductReviews from './ProductReviews'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProDetails = () => {
    const [selectedColor, setSelectedColor] = useState()
    const [selectedSize, setSelectedSize] = useState()
    const {productName}=useParams()
    
const [product,setProduct] =useState( undefined)
  
    useEffect(()=>{
      axios.get(`http://localhost:3000/product/${productName}`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      }).then((res) => {
        const p=res.data.data.product;
        console.log(p);
        setProduct ({
          id:p._id,
          name: p.name,
          price: p.price+"EGP",
          href: '#',
          number:p.stock,
          breadcrumbs: [
            { id: 1, name: p.category.name, href:''+p.category.name },
            { id: 2, name: p.subCategory.name, href:'/category/'+p.subCategory.name+'/1' },
          ],
          images: [
            {
              src: p.photo,
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: p.photo,
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: p.photo,
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: p.photo,
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
          ],
          specs:p.specs,
         
          description:p.description,
          highlights: [
            'Free Delivered',
            'No Taxes',
            'Made in Egypt',
          ],
          details:
          p.description+p.name,
        })
      })
     },[productName])
  
  
     
      
     
    
     





    
    //add to cart
    const addHandler=()=>{

      axios.post('http://localhost:3000/cart',{productId:product.id, quantity:num}, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }).then((res) => {
                    console.log(res.data.data.cart);
                })
           // console.log(selectedColor.name,selectedSize.name,num);
    }

    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<product.number)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }

    if(product==undefined){
     
      return(<>
      <div className='w-full h-96'>
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
    </div></div></>)
    }
  
  
    return (
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <Link to={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </Link>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
  
          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
  
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href="#1" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
  
            
             
  
                {/* specs */}
                <div className="mt-10">
                {product.specs.map((item)=>(
                 
                      <div key={item.value} className="flex items-center justify-between">
                      <h3 className="text-sm text-gray-900 font-medium">{item.name}:<span className='p-2'>{item.value}</span></h3> 
                    </div>
                           

                    ))}
             
                
  
              
                </div>
  





   {/* items */}


                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">Number of Items</h3>
                  
                  </div>
                <div className="col-xl-1">
                <div className="input-group">
                 <div className="input-group-prepend">
                  <button className="w-16 h-12 btn bg-indigo-600 text-white " type="button" onClick={decNum}>-</button>
                        </div>
                       <input type="text" className="form-control" value={num} onChange={handleChange}/>
                        <div className="input-group-prepend">
                       <button className="w-16  h-12 btn bg-indigo-600 text-white" type="button" onClick={incNum}>+</button>
                      </div>
                          </div>
                          </div>














                <button
                disabled={product.number<0}
                  type="submit"
                  className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={addHandler}
               >
                  Add to Cart
                </button>
        
            </div>
  
            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
  
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
  
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  
                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>


          




              </div>
              
            </div>
          </div>
        </div>
        <div id="1">
          < ProductReviews/>
        </div>
      </div>
      
    )
};

export default ProDetails;