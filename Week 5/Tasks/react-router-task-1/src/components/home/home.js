import React from "react";

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            fname:"Essam",
            lname:"Abdullah",
            jobTitle:"Full Stack developer",
        }
    }
    render(){
        return<>
            <div className="container mt-4">
                <div className="row">
                    <div className=" col-12 col-sm-8"><h3 className="bg-danger text-white">{this.props.link}</h3>
                        <h2 style={{backgroundColor:'black',color:'white',fontSize:'50px'}}>
                            hello I'm {this.state.fname} {this.state.lname}
                        </h2>
                        <p>i'm a {this.state.jobTitle}</p>
                        <p>Hello From Home Page</p>
                    </div>
                    <div className="col-12 col-sm-4 d-none d-sm-block">
                        <img src="./images/logo192.png" alt="sssss"/>
                    </div>
                </div>    
            </div>
        </>
    }
}