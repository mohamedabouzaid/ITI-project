import React from 'react';
import CategoryFilters from '../../shared/components/UI/CategoryFilters'
import ProList from '../../shared/components/UI/proList';
import {useParams} from 'react-router-dom'

const categories = () => {

    const {catName} =useParams()
   
    return (
        <>
        <h1>{catName}</h1>
       < CategoryFilters filter={ < ProList />} />
      
       
       </>
    );
};

export default categories;