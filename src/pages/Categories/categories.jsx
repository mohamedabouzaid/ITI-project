import React from 'react';
import CategoryFilters from '../../shared/components/UI/CategoryFilters'
import ProList from '../../shared/components/UI/proList';
import {useParams} from 'react-router-dom'
import Paggation from '../../shared/components/UI/paggation';

const Categories = () => {

    const {catName, filter} =useParams()
   
    return (
        <>
       < CategoryFilters catName={catName} filter={<> < ProList />< Paggation catName={catName} filter={ filter}/></>} />
      
       
       </>
    );
};

export default Categories;