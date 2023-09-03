import React, { Component } from 'react'
import { Container, Row ,Col, Button } from 'react-bootstrap';
import MainHeader from '../layout/header';

export default class About extends Component {

    constructor(){
        super();
        this.state={
            users:[
                {name:"mohamed" ,email: "mohamed@gmail.com" , isActive:true},
                {name:"ahmed" ,email: "ahmed@gmail.com" , isActive:true},
                {name:"gamal" ,email: "gamal@gmail.com" , isActive:false},
                {name:"yaser" ,email: "yaser@gmail.com" , isActive:true},
                {name:"ramy" ,email: "ramy@gmail.com" , isActive:false},
            ],
            isLogin:true
        }
    }
 loginHandler=()=>{
    this.setState({isLogin:(this.state.isLogin)?false:true})
 }

  render() {
    return (
     <>
     <MainHeader />
     {/* <Container fluid>
        <Row>
            <Col xm={12} md={8}>1</Col>
            <Col xm={12} md={4}>1</Col>

        </Row>
     </Container>
     <Button variant="outline-warning" size='lg'> hello react bootstrap</Button>
     <Button variant="outline-warning" size='sm'> hello react bootstrap</Button> */}
     
{
    this.state.isLogin ? <ul>
    {this.state.users.map((user,index)=>{
     
        return user.isActive && <li key={user.email}>{user.name}</li>
      
    })}

</ul> 
:
<p>You Must Be Login To See This Data</p>
}
<Button variant="outline-warning" size='lg' onClick={()=>{this.loginHandler()}}> hello react bootstrap</Button>

     </>
    )
  }
}
