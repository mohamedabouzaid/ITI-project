import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Reviews from '../UserUI/Reviews';
import HistoryOrders from '../UserUI/HistoryOrders';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Order = () => {
    let [categories] = useState({
        OnWay: [
          {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        History: [
          {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
          },
          {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
          },
        ],
        Reviews: [
          {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
          },
        ],
      })
    
      return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
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
           
            <Tab.Panel>omway</Tab.Panel>
            <Tab.Panel><HistoryOrders/></Tab.Panel>
            <Tab.Panel><Reviews/></Tab.Panel>
             
             
            </Tab.Panels>
          </Tab.Group>
        </div>
      )
};

export default Order;