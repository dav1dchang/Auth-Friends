import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

const Friends = () => {
    const [friends, setFriends] = useState([])

    componentDidMount(){
        getData()
    }

    const getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data.friends)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            {/* <FriendMaker/> */}
            <Friends/>
        </div>

    )


}

export default Friends