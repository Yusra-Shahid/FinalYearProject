import React, { Component } from "react";
import "../Css/ExMainPage.css";
import { Layout } from "antd";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";


export class ExMainPage extends Component {
    render() {
        return (<Layout>
            <Navbar />
            <div className="fazul"></div>
            <div className={"ExSECContainer"}>
            <div className="MainPageContext">THE I-MedCare Web
                <br></br>
                    Find your new favorite workout</div>
                
                
                
                <div class="card1 first">
                    <div class="front1">
                    <img src="https://media.self.com/photos/57b48c68e23186493e317374/master/w_320%2Cc_limit/chair-band-jumps.gif" />
                        {/* <img src="img.jpg" alt=""> */}
                    </div>
                    <div class="back1">
                        <div class="back1-content first">
                            <h2>Aerobic Exersice</h2>
                            <span>Youtube Channel</span>
                            <div class="sm">
                                <div className="uploaded">
                                    <button>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card11 middle">
                    <div class="front11">
                        <img src="https://thumbs.gfycat.com/ContentVacantFreshwatereel-max-1mb.gif"  />

                    </div>
                    <div class="back11">
                        <div class="back11-content middle">
                            <h2>Strength Exersice</h2>
                            <span>Youtube Channel</span>
                            <div class="sm">
                                <div className="uploaded">
                                    <button>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card3 third">
                    <div class="front3">
                        <img src="http://newlife.com.cy/wp-content/uploads/2019/11/23681301-Split-Squats_Thighs_360.gif" width={400} />
                    </div>
                    <div class="back3">
                        <div class="back3-content third">
                            <h2>Stretching Exersice</h2>
                            <span>Youtube Channel</span>
                            <div class="sm">
                                <div className="uploaded">
                                    <Link to="/Stretching">
                                        <button>View</button>
                                    </Link>
                                </div>
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