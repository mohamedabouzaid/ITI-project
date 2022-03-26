import { StarIcon } from '@heroicons/react/solid'
const userReviews = [
    {
      id: 1,
      name: 'T-shirt',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      average: 3,
      msg: 'very nice product',
      price:123
    },
    {
        id: 2,
        date:'2 monday 2020',
        name: 'T-shirt',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        average: 3,
        msg: 'very nice product, you must to buy it',
      },
      {
        id: 3,
        name: 'T-shirt',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        average: 3,
        msg: 'very nice product, you must to buy it,very nice product, you must to buy it',
      },
     
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        average: 5,
        color: 'Black',
      },
      
    // More products...
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Reviews = () => {
    return (
        <div className="bg-white">
        <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-5 lg:max-w-4xl lg:px-7">
          <h2 className="text-2xl  font-extrabold tracking-tight text-indigo-600">Reviews</h2>
  
          <div >
          
            {userReviews.map((review) => (
              <div key={review.id} className="divide-y divide-slate-700 ">
             
                <div className="mt-4 flex justify-between">
                  <div>
                       
                  <img
                   className="h-32 w-32 m-3  inline"
                    src={review.imageSrc}
                    alt={review.imageAlt}
                   
                  />
                    <h3 className="text-sm text-gray-700 px-5">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {review.name}
                    </h3>
                    <h3 className="text-sm text-gray-700 px-5 ">
                        <span aria-hidden="true" className=" absolute inset-0" />
                        EGP {review.price}
                    </h3>
                   
                  </div>
                  <p className="mt-1 p-5 text-sm text-gray-500 text-center">{review.msg}</p>
                  <div className="mt-6">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.average > rating ? 'text-yellow-500' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="">{review.average} out of 5 stars</p>
                
                </div>
              </div>
              <hr  />
                </div>
          
            ))}
           

          </div>
        </div>
      </div>
    );
};

export default Reviews;