import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
// import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
const catLink='/category/'
/*const subCategories = [
  { name: 'Totes' },
  { name: 'Backpacks' },
  { name: 'Travel Bags' },
  { name: 'Hip Bags' },
  { name: 'Laptop Sleeves' },
]


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }*/


const CategoryFilters = (props) => {
  const {catName,componants,subCategories}=props
 
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    return (
        <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>


               
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{catName}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
               

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                 
                </Transition>
              </Menu>

             
            
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
             
                <h3 className="sr-only">Categories</h3>
                <ul className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link to={ catLink+category.name+"/1"}>{category.name}</Link>
                    </li>
                  ))}
                </ul>

               
             

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div  >{componants}</div>
                
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    );
};

export default CategoryFilters;