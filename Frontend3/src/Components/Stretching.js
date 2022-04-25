import React, { Component } from "react";
import "../Css/Stretching.css";
import { Layout } from "antd";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";
import ExMainPage from "./ExMainPage";


export class Stretching extends Component {
    render() {
        return (<Layout>
            <Navbar />

            <div className="fazul">yugyukg</div>
            <div className={"stretch_ExContainer"}>jkii
                <div className="check">nmj</div>
                </div>

            <Footer>
                <p>Copyright © 2021 I-MedCare. All Rights Reserved</p>
            </Footer>
        </Layout>


        );

    }
}
export default Stretching;