import React, { useState } from "react";
import MainHeader from "../layout/header";
import { useNavigate } from "react-router-dom";

// Native Form onChangeHandlder [142 - 143]
export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const [error,setError]= useState({emailError:"",passwordError:""})
  const navigate=useNavigate();

  const changeUserEmail=(e)=>{
// eslint-disable-next-line eqeqeq
if(e.target.name =="email")
{
setUser({...user,email:e.target.value})
// console.log(user)
setError({...error,emailError:(e.target.value.length==0)?"email is empty":""})

  }
  }

  const changeUserPassword=(e)=>{
    if(e.target.name=="password")
    {
    setUser({...user,password:e.target.value})
    setError({...error,passwordError:(e.target.value.length==0)?"password is empty":""})
    
      }
      }



  const onSub=(e)=>{
    e.preventDefault();
    if(error.passwordError==""&&error.emailError==""){
        navigate("/home")
    }
  }
  return (
    <>
   

      <div className="w-50 mx-auto mt-5">
        <form onSubmit={(e)=>{onSub(e)}}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            onChange={(e)=>{changeUserEmail(e)}}
            name="email"

            />
            <div id="emailHelp" className="form-text">
              {error.emailError}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>{changeUserPassword(e)}}
              name="password"
            />
              <div id="passwordHelper" className="form-text">
              {error.passwordError}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
