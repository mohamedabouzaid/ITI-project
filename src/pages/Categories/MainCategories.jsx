import React from 'react';
import ProductList from '../../shared/components/UI/proList'
import SubCategory from '../../shared/components/UI/subCategory'
import {useParams} from 'react-router-dom'
const MainCategories = () => {
    const {mainCat}=useParams()
    
    return (
       <> 
         
          <SubCategory catName={mainCat} componants={<> <ProductList />  < ProductList /> < ProductList /></>} />
         
        </>
    );
};

export default MainCategories;