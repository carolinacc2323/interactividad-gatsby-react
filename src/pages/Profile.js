import React from 'react';
const userId = localStorage.getItem('tndm_id')
const userEmail = localStorage.getItem('tndm_email')
const userToken = localStorage.getItem('tndm_token')

const Profile = () => {
    return (
        <div>
            <h1>User Profile</h1>
            {userId&&<p>{userId}</p>}
            {userEmail&&<p>{userEmail}</p>}
            {userToken&&<p>{userToken}</p>}
        </div>
    );
};
export default Profile;