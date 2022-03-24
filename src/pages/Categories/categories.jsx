import React from 'react';
import CategoryFilters from '../../shared/components/UI/CategoryFilters'
import ProList from '../../shared/components/UI/proList';
import {useParams} from 'react-router-dom'

const categories = () => {

    const {catName} =useParams()
   
    return (
        <>
       < CategoryFilters catName={catName} filter={ < ProList />} />
      
       
       </>
    );
};

export default categories;