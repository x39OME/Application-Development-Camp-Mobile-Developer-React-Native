import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import MainHeader from '../layout/header';

export default class About extends Component {

  ButtonOnClick = () => {
    this.setState({counter: this.state.counter + 1 });
  }
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state={
      users:[
        {name:"Sam", email:"Sam@hotmail.com", isActive:true},
        {name:"AN", email:"AN@hotmail.com", isActive:true},
        {name:"Seqweam", email:"Sqweam@hotmail.com", isActive:true},
        {name:"Ahmed", email:"Ahmed@hotmail.com", isActive:true},
        {name:"Ahmed123", email:"Ahmed123@hotmail.com", isActive:true}
      ],
      counter: 0,
      isLogin:true
    }
  }
  loginHandler = () =>{
    this.setState({isLogin:(this.state.isLogin)? false : true})
  }
  render() {
    return (
      <>

        <p>{this.state.counter}</p>
        <button onClick={this.ButtonOnClick}>+</button>
      <MainHeader />
        <Container fluid>
          <Row>
            <Col xm={12} md={8}>1 of 3</Col>
            <Col xm={12} md={2}>2 of 3</Col>
            <Col xm={12} md={2}>3 of 3</Col>
          </Row>
        </Container>
        <Button>Hello React Boostrap</Button>
        <Button variant="warning" size='lg'>Warning</Button>


        {
          this.state.isLogin ? 
            <ul>
              {this.state.users.map((users, index)=>{
                // if(users.isActive) {
                //   return <li key={users.email}>{users.name}</li>
                // }
                return users.isActive && <li key={users.email}>{users.name}</li>
              })}
            </ul>
          : 
          <p>You Must Be Login To See This List</p>
        }
        <Button variant="warning" size='lg' onClick={()=>{this.loginHandler()}}>Hello loginHandler</Button>

      </>
    )
  }
}
