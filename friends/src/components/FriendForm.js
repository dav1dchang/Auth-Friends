import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

const FriendForm = (props) => {
    const initialValues = {
        id: '',
        name: '',
        age: '',
        email: '',
    }

    const [formValues, setFormValues] = useState(initialValues)

    const onChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    
    const onSubmit = e => {
        e.preventDefault()
        const formValuesWithId = {
            ...formValues,
            id: props.friends.length + 1,
        }
        axiosWithAuth().post('/friends', formValuesWithId)
            .then(res => {
                props.setFriends(res.data)    
            })
            .catch(err => {
                console.log(err)
            })
        setFormValues(initialValues)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Friend Form</h2>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={onChange} 
                />
            </label>
            <label>
                Age:    
                <input
                    type='text'
                    name='age'
                    value={formValues.age}
                    onChange={onChange} 
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    value={formValues.email}
                    onChange={onChange} 
                />
            </label>
            <button>Add</button>
        </form>
    )
}

export default FriendForm