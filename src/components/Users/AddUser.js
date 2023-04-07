import React, { useState } from 'react';
import './AddUser.css';
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        //if (enteredAge == '' || enteredAge < 1 || enteredUsername == '') {
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });

        } else if (+enteredAge < 1){
            alert("Age cannot be lower than 1")
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)."
            });

        } else {
            console.log("log from AddUser.js - " + enteredUsername, enteredAge); //fetch

            const user = {
                name: enteredUsername,
                age: enteredAge,
                id: Math.random().toString()
            }
            props.onAddUser(user);

            setEnteredUsername('');
            setEnteredAge('');
        }

    };
    
    const errorHandler = () => {
        setError(null);
    };


   // {error && <ErrorModal title={error.title} message={error.message}/> } //if error exists show ErrorModal

    return (<div>
       {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} /> } 
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <div className="add-user">
                    <label htmlFor="username">User</label>
                    <input id="username" value={enteredUsername} onChange={usernameChangeHandler} type="text" />
                    <label htmlFor="age">Age</label>
                    <input id="age" value={enteredAge} onChange={ageChangeHandler} type="number" />
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
};

export default AddUser;