import {useEffect,useState} from 'react';
import axios from 'axios';
import UserSections from '../../shared/components/UserUI/UserSections';

const Profile = () => {

  const [user, setUser] = useState(undefined);
  const [orders, setOrders] = useState(undefined);

  useEffect(()=>{
  axios.get('http://localhost:3000/me', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}).then((res) => {
    setUser(res.data.data.me);
})
},[])

useEffect(()=>{
    axios.get('http://localhost:3000/order', {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  }).then((res) => {
      setOrders(res.data.data.orders);
  })
  },[])

    if(user==undefined || orders==undefined){
        return(<>  <div className='w-full h-96'>
        <div className="flex justify-center items-center space-x-2">
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-purple-500
            " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-green-500
            " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-yellow-500
            " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div></div></>)
    }

    return (
        <>
    <UserSections user={user} orders={orders} /> 

   </>
    );
};

export default Profile;