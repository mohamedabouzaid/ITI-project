import React from 'react';
import CategoryFilters from '../../shared/components/UI/CategoryFilters'
import ProList from '../../shared/components/UI/proList';

const categories = () => {
   
    return (
        <>
       < CategoryFilters filter={ < ProList />} />
      
       
       </>
    );
};

export default categories;