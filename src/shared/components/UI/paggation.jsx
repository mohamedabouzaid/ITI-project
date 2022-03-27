import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'

const data={
    result:97
}
const Arr =[1,2,3,4,5,6]
const Paggation = (props) => {
 
   const {filter,catName}=props
   let pre=filter-1;
    let nex=+filter+1;
  
    if(+filter===1){
      pre=1
    }
 else if(filter===Arr.length){  
   nex=Arr.length;
 }


  
   const navLink=`/category/${catName}/`
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <Link
            to={navLink}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </Link>
          <Link
            to={navLink}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </Link>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">{data.result}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
         
              <Link
                to={navLink+pre}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
          
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              
             {
                 Arr.map((item)=>(

                    <Link
                   
                    key={item}
                    to={navLink+item}
                    aria-current="page"

                    className={(
                        item === filter
                          ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      )}>
                    {item}
                  </Link>



                 ))
             }


             
             

            
              <Link
                to={navLink+nex}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            
            </nav>
          </div>
        </div>
      </div>
    );
};
export default Paggation;