import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Reviews from '../UserUI/Reviews';
import HistoryOrders from '../UserUI/HistoryOrders';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Order = (props) => {
  const {user,orders}=props
  
    let [categories] = useState({
        orders: [],
        Reviews: [],
      })
    
      return (
        <div >
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
           
            <Tab.Panel><HistoryOrders orders={orders} /></Tab.Panel>
            <Tab.Panel><Reviews/></Tab.Panel>
             
             
            </Tab.Panels>
          </Tab.Group>
        </div>
      )
};

export default Order;