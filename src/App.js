
import { useEffect, useState } from 'react';
import './App.css';
import './MyStyle.css'

function App() {
  return (
    <div>
      <UserDataLoad></UserDataLoad>
    </div>
  );
}


// api data load 

function UserDataLoad() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className='gride-style' >
      {
        users.map(user => <DisplayUser name={user.name} email={user.email}></DisplayUser>)
      }
    </div>
  )
};



// data display in UI

function DisplayUser(props) {
  const { name, email } = props;

  const [count, setCount] = useState(0);


  const moreDetals = () => {
    const newValu = count + 1;
    setCount(newValu);
  }

  return (

    <div className="BoxStyle">
      <h3>Name : {name}</h3>
      <h5>Email : {email}</h5>
      <p> Count Valu : {count}</p>
      <button className="btn-style" onClick={moreDetals}> More.. </button>
    </div>

  )
}

export default App;
