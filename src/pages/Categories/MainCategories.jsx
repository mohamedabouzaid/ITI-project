import {useEffect,useState} from 'react';
import ProductList from '../../shared/components/UI/productList'
import SubCategory from '../../shared/components/UI/subCategory'
import {useParams} from 'react-router-dom'
import axios from 'axios';
const MainCategories = () => {
    const[sub,setSub]=useState(undefined)
    const {mainCat}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/category/${mainCat}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
    
        setSub(res.data.data.category.subCategories)
        
        })
       },[mainCat])
     
    if(sub==undefined){
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
         
          <SubCategory catName={mainCat} subCategories={sub}  componants={<> {sub.map((s)=>(s.products.length>0&&<ProductList key={s.name} sub={s.name} sectionName={s.name}/>))}  </>} />
         
        </>
    );
};

export default MainCategories;