import React from "react";
import MainHeader from './../layout/header';
export default class Home extends React.Component{


    constructor(){
        super();
        console.log("from constructor")//1
     this.state={
            fname:"mohamed",
            lname:"gamal",
            jobTitle:"front-end developer",
            salary:"2000"
        }
    }

    componentDidMount(){
        console.log("from mount")//3
       
    }
    componentDidUpdate(){
        console.log("from update") //  it will run in every update
        
    }
    componentWillUnmount(){
        console.log("from unmount") // it will be run on unmount (clean up )
        // setintervel clearinterval 
        
    }

    changingName=(x)=>{
        this.setState({fname:(this.state.fname==="mohamed")?"ahmed":"mohamed",salary:(this.state.fname==="mohamed")?x:2000})
    }
    render(){
        console.log("from render")//2
        return <>
        <MainHeader number="5"/>
       <div className="container mt-4">
        <div className="row">
      <div className=" col-12 col-sm-8">  <h3 className="bg-danger text-white">{this.props.link}</h3>
         <h2 style={{
            backgroundColor:'green',color:'white',fontSize:'40px'
         }}>hello I'm {this.state.fname} {this.state.lname}</h2>
        <p>i'm a {this.state.jobTitle}</p>
        <p>my salary is {this.state.salary}</p>
        <button onClick={()=>{
            this.changingName(4000)
        }} className="btn btn-warning btn-lg">change name </button></div>
       <div className="col-12 col-sm-4 d-none d-sm-block">
       <img src="./images/logo192.png" alt="ss"/>

       </div>
        </div>

       </div>

        </>
    }

}