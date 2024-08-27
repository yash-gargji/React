import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const user = useContext(UserContext);
    
    if(!user.user)
         return  <div>Please login</div>
         
    return (
        <div> Welcome {user.user.username}</div>
    )
}

export default Profile