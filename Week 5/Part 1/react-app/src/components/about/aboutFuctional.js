import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import MainHeader from '../layout/header';

// Link About [useState - useEffect]
export default function AboutFuctional(){

// eslint-disable-next-line no-unused-vars
const [users,setUsers]=useState([
    {name:"Alanoud" ,email: "AN@gmail.com" , isActive:true},
    {name:"Sam" ,email: "Sam@gmail.com" , isActive:true},
    {name:"gamal" ,email: "gamal@gmail.com" , isActive:false},
    {name:"yaser" ,email: "yaser@gmail.com" , isActive:true},
    {name:"ramy" ,email: "ramy@gmail.com" , isActive:false},
]);
const [isLogin ,setLogin] =useState(true);
  useEffect(()=>{ //mounting method
    console.log('Hello from useEffect')
    return ()=>{ //unmount
    }
  }
  ,[]);

  useEffect(()=>{ // update 
    console.log("form is user")
  },[users])
  //   useEffect(()=>{
  // console.log("form is login")
  //   },[isLogin])

  const loginHandler = ()=>{
    setLogin(!isLogin)
  }

  return (
    <>

      {
        isLogin ?   <ul>
        {   users.map((user,index)=>{
          return user.isActive && <li key={index}>{user.name}</li>
        })}
          </ul> : <p>Please login first to see data !</p>
      }

<button className='btn btn-info text-white' onClick={()=>{loginHandler()}}> login toggle </button>
    </>
  )
}
