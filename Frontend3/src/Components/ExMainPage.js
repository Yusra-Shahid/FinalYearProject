import React, { Component } from "react";
import "../Css/ExMainPage.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";


export class ExMainPage extends Component {
    render() {
        return (<Layout>
            <Navbar />
            <div className="fazul"></div>
            <div className={"ExMainContainer"}>
                <div className="ExNavigate">
                    <div className="menu_toggle"></div>
                </div>
            </div>


            <Footer>
                <p>Copyright © 2021 I-MedCare. All Rights Reserved</p>
            </Footer>
        </Layout>


        );

    }
}
export default ExMainPage;