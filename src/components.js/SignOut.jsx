import React from "react";
import { Component } from "react";
import '../components.js/sign.css';

class Signout extends Component {
    constructor(props)
    {
        super(props)
        this.state ={

        }
    }

    render(){
        return (
            <div className="images">
               
                <div className="text">
                <h1> Successfully Signout</h1>
                <h3> Thankyou</h3>
               </div>
            </div>
        )
    }
}

export default Signout