import React, { Component } from "react";
import "../Css/ExMainPage.css";
import { Layout } from "antd";
import Button from '@mui/material/Button';
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";


export class ExMainPage extends Component {
    render() {
        return (<Layout>
            <Navbar />
            <div className="fazul"></div>
            <div className={"ExMainContainer"}>

                <div class="card2 middle">
                    <div class="front2">
                        {/* <img src="yoga2.jpg" alt="" /> */}
                    </div>
                    <div class="back2">
                        <div class="back-content middle">
                            <h2>DarkCode</h2>
                            <span>Youtube Channel</span>
                            <Button size="small" >more for you</Button>
                            <div class="sm">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card1 first">
                    <div class="front1">
                        {/* <img src="img.jpg" alt="" /> */}
                    </div>
                    <div class="back1">
                        <div class="back-content middle">
                            <h2>DarkCode</h2>
                            <span>Youtube Channel</span>
                            <Button size="small" >more for you</Button>
                            <div class="sm">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card3 third">
                    <div class="front3">
                        {/* <img url="../Images/yoga2.jpg" alt="" /> */}
                    </div>
                    <div class="back3">
                        <div class="back3-content middle">
                            <h2>DarkCode</h2>
                            <span>Youtube Channel</span>
                            <Button size="small" >more for you</Button>
                            <div class="sm">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
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