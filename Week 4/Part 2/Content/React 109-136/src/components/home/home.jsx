/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MaineHeader from './../layout/header';
export default class Home extends React.Component{

  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    console.log('From Constructor') // 1
    
    this.state= {
      fname:"Alanoud",
      lname:"AN",
      jobTitle:"Front-End",
      salary: "5000"
    }
  }

  componentDidMount(){
    console.log('Component Did Mount') // 3
    this.setState({fname:"AN"});

  }
  componentDidUpdate(){
    console.log('Component Update') // it will run in every update
  }
  componentWillUnmount(){
    console.log('Component Will Unmount') // it will be run in Unmount (Clean up)
    // setinterval - clearInterval

  }

  changeName=(x) =>{
    // eslint-disable-next-line eqeqeq
    this.setState({fname:(this.state.fname=='Alanoud') ? 'AN' : 'Alanoud', salary:(this.state.fname=='Alanoud') ?2000 : 4000});
  }
  render(){

    console.log('From Render') // 2 // <React.Fragment></React.Fragment> = <></>
    return <>
      <MaineHeader number='Alanoud' />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 style={{
              backgroundColor:'#0ff', color:'#fff'
            }}>Hello I'm {this.state.fname} {this.state.lname}</h1>
            <p className="bg-danger">I'm {this.state.jobTitle}</p>
            <p>I Take {this.state.salary} Salary</p>
            <button onClick={()=>{
              this.changeName()
            }}>Change</button>
          </div>
          <div className="col">
          <img src="./images/logo512.png" />

          </div>
        </div>
      </div>
    </>
  }
}

