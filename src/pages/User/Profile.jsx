import React from 'react';
import UserDetail from '../../shared/components/UserUI/ProfileDetails'
import UserSections from '../../shared/components/UserUI/UserSections';
const Profile = () => {
    return (
      <UserSections componants={ <UserDetail/>} />
    
    );
};

export default Profile;