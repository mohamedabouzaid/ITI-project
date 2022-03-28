import {useEffect,useState} from 'react';
import axios from 'axios';
import UserSections from '../../shared/components/UserUI/UserSections';

const Profile = () => {

  const [user, setUser] = useState(undefined);

  useEffect(()=>{
  axios.get('http://localhost:3000/me', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}).then((res) => {
    setUser(res.data.data.me);
})
},[setUser])
 

    return (
        <>
   { user ? <UserSections user={user} /> :<h1>no users found</h1> }

   </>
    );
};

export default Profile;