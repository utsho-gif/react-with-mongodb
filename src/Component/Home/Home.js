import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
      const proced = window.confirm('Are you sure?');
      if(proced){
          console.log('deleting', id);
          const url = `http://localhost:5000/user/${id}`;
          fetch(url, {
              method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  const remaining = users.filter(user => user._id !== id);
                  setUsers(remaining);
              }
          })
      }
  };
  return (
    <div>
      <h1>This is home</h1>
      <ul>
        {users.map((user) => (
          <li style={{ listStyle: "none" }} key={user._id}>
            {user.name} <br /> {user.email} <br />
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
