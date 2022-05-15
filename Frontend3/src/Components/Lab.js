import React, { Component } from "react";
import "../Css/Lab.css";
import { Layout, Table } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { Line, Pie } from "react-chartjs-2";
import Navbar from "./navbar";

export class Lab extends Component {
    render() {
        return (<Layout>
            <Navbar />

            <div className="LabMainContainer">

            <div className="lab-head">
                <div className=" lab-img-1">
                <div className=" lab-img-2"></div>
                </div>
               
            </div>


             <div className="lab-head"></div> 

              <div className="lab-head"></div>

               <div className="lab-head"></div>  
                </div>

            <Footer>
                <p>Copyright © 2021 I-MedCare. All Rights Reserved</p>
            </Footer>
        </Layout>


        );

    }
}
export default Lab;