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


                <div class="card1 first">
                    <div class="front1">
                        <img src="https://www.shutterstock.com/image-photo/yoga-poses-strait-natural-park-tarifa-1116636086" width={400} />
                        {/* <img src="img.jpg" alt=""> */}
                    </div>
                    <div class="back1">
                        <div class="back1-content first">
                            <h2>DarkCode</h2>
                            <span>Youtube Channel</span>
                            <div class="sm">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                 <div class="card11 middle">
                    <div class="front11">
                        <img src="https://www.shutterstock.com/image-photo/yoga-poses-strait-natural-park-tarifa-1116636086" width={400} />
                       
                    </div>
                    <div class="back11">
                        <div class="back11-content middle">
                            <h2>DarkCode</h2>
                            <span>Youtube Channel</span>
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
                        <img src="https://www.shutterstock.com/image-photo/yoga-poses-strait-natural-park-tarifa-1116636086" width={400} />
                    </div>
                    <div class="back3">
                        <div class="back3-content third">
                            <h2>DarkCode</h2>
                            <span>Youtube Channel</span>
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