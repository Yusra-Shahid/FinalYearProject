import React, { Component } from "react";
import "../Css/exercise.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";
import MasonryImageList from "./ButtonComponent/FitnessImg"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ExMainPage from "./ExMainPage";

export class exercise extends Component {
    render() {
        return (<Layout>
            <Navbar />
            <div className="EXfazul"></div>
            <div className={"ExMainContainer"}>
            
                <div className="leftbuttons">
                    <h21>Work out at home for free</h21>
                    <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>

                    <Link to="/ExMainPage">
                        <Button onclick="contained">BROWSE VIDEOS</Button>
                    </Link>
                </div>

                <div className="rightbuttons">
                    <MasonryImageList />
                </div>

            </div>

            <Footer>
                <p>Copyright © 2021 I-MedCare. All Rights Reserved</p>
            </Footer>
        </Layout>


        );

    }
}
export default exercise;