import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import FriendForm from './FriendForm.js';
import Friend from './Friend.js';

const Friends = () => {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <FriendForm friends={friends} setFriends={setFriends}/>
            <h2>Friends</h2>
            {friends.map((friend) => (
            <Friend friend={friend}/>
            ))}
        </div>

    )
}

export default Friends