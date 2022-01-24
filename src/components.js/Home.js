import React, { Component } from "react";
import Demo from "../UIcomponents.js/demo";
import Demo1 from "../UIcomponents.js/demo1";
import FooterComponent from "./FooterComponent";
import Header from "./HeaderComponent";

class Home extends Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        return(
            <div>
                <Header/>
                <Demo/>
                <Demo1/>
                <FooterComponent/>
            </div>
        )
    }
}

export default Home