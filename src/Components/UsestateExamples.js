import React, { useState } from 'react'

const usersInfo = [

    { id: Math.random(), name: 'Vahagn', age: 31, country: 'Armenia' },
    { id: Math.random(), name: 'Ivan', age: 57, country: 'Russia' },
    { id: Math.random(), name: 'James', age: 45, country: 'USA' },

]
const UsestateExamples = () => {

    const [users, setUsers] = useState(usersInfo);

    const addUsers = () => {

        setUsers((users) => [...users, {
            id: Math.random() ,
            name: 'Tomas',
            age: 25 ,
            country: 'Spain',
        }])

    }

    return (
        <>

            <div className='parent'>
                {
                    users.map((user) => {
                        return (
                            <div className='child' key={user.id}>
                                <p> {user.name} </p>
                                <p> {user.age} </p>
                                <h5> {user.country} </h5>
                            </div>
                        )
                    })
                }
            </div>
            <button className='btn' onClick={addUsers}>ADD</button>
        </>
    )
}

export default UsestateExamples