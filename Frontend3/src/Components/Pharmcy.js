import React, { Component } from "react";
import "../Css/Pharmacy.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";

import Navbar from "./navbar";

import Button from '@mui/material/Button';


export class Pharmacy extends Component {
    render() {
        return (<Layout>
            <Navbar />

            <div className="LabMainContainer">
            <div className="pharmacy-head">
                <div className="phar-head">
                    <h23>Online Pharmacy Stores
                    <img src="https://monophy.com/media/YMpUBQeazNewnaLDw1/monophy.gif" style={{height: 100, width: 100}}/>
                    </h23>
                    <div className="phar-head-para" >
                    <p>I-Medcare also provides online pharmacy. 
You can easily order your medicines online. Be a part of this project and explore easy access to everything related to Medicine. Your problems our solutions get involved and have everything on finger tips</p>

                    </div>
                </div>
                <div className="phar-head-img">
                    <img src="https://www.vyrazu.com/wp-content/uploads/2021/10/Banner-for-Pharmacy-1-1.svg"/>
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
export default Pharmacy;