import React from 'react';
import Card from '../UI/Card'
import './UsersList.css';


const UsersList = props => {

// props.users? -- w kursie dziala bez tego sprawdzenia

    return (
        <Card className="users">
            <ul>
                {props.users?.map((user) => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
};



export default UsersList;