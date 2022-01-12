import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div >
            <h1>Friends components : {user.length}</h1>
           <div className='friend-container'>
                {
                    user.map(user => <Friend user={user}
                    key={user.id}></Friend> )
                }
           </div>
        </div>
    );
};

export default Friends;