import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

/* const INITIAL_USERS = [
  {
    name: 'Ala',
    age: 12,
    id: 'u01',
  },
  {
    name: 'Ela',
    age: 13,
    id: 'u02',

  },
  {
    name: 'Ola',
    age: 14,
    id: 'u03',
  },
]; */


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUser) => { //w kursie przekazane jako (uName, uAge)
    console.log("log from App.js - addUserHandler triggered")
    console.log("from App.js - " + newUser.name + ", " + newUser.age)


    setUsersList((prevUsersList) => { // prevUsersList is not iterable, działa jak przekazuje INITIAL_USERS, props.users?
      return [...prevUsersList, newUser];
    });

  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
