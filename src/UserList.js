import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUSer,setlistOfUSer] = useState('');

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
           
            setlistOfUSer(response.data); 
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [])
    
  return (
    <>
        {listOfUSer && listOfUSer.map((user, i)=>{
            return(
                <div style={{padding:20}}>
                    <div>name : {user.name}</div>
                    <div>username : {user.username}</div>
                    <div>email : {user.email}</div>
                </div>
                )
        }
            
            )}
    </>
  )
}

export default UserList