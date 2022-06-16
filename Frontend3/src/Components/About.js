import React, { Component } from "react";
import "../Css/About.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";
import CustomizedTimeline from "./ButtonComponent/Process"
import { FcServices, FcFinePrint, FcHome, FcDisclaimer } from "react-icons/fc";
import { Comment } from "antd";
import Chatbot from '../Components/Chatbot';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
//import comments from "../Components/Comment";

import { SiFacebook, SiLinkedin, SiTwitter, SiInstagram } from "react-icons/si";


export class About extends Component {
    render() {
        return (<Layout>
            <Navbar />
            <div className={"aboutContainer"}>
                <div className="mainitem">
                    <div className="item1" >
                        <div className="our-purpose">
                            <h1>About I-MedCare:</h1>
                            <div className="pupose-txt">
                                <p>I Medicare is a solution for the healthcare system,
                                    as the health care industry is growing rapidly and
                                    the integeration of tech with the healthcare making
                                    the things more easier and clear for the user(patient) as well
                                    as for the doctor.In our project we are trying to make the easiest
                                    way for the doctor to consult with their patient online, without having
                                    the physical interaction and same goes fort the patient.
                                    By figuring out the current scenario of covid,
                                    still there are some new variants which can become the cause of disaster.
                                    if we talk about world wide numbers of covid, there are around more then
                                    270 Million cases and the death ratio is more then 5.3 Million. The big countries
                                    like USA, India having the biggest death and cases ratio.Our project can help to overcome
                                    this by making things virtual. Doctor and patients, all having their respective profiles
                                    and even after the consultation, patient can order the medicines without going
                                    out from their comfort zone. This will help us to secure a big number of people..</p>
                            </div>
                            <div className="about-pic">
                                <img src="https://www.thevinemedicalcenter.com/wp-content/uploads/2020/06/4466-doctor-consultation1.gif" width={400} />
                            </div>
                        </div></div>

                    <div className="item2">
                        <div className="handing">
                            <h3 data-text="OUR PROCESS TO BOOK APPOINTMENT">OUR PROCESS TO BOOK APPOINTMENT</h3>
                        </div>
                        <div className="process">
                            <CustomizedTimeline />
                        </div>

                        <div className="our-video">
                            <video autoPlay controls />
                            <source src="" type="video/mp4" />
                        </div>
                    </div>

                    <div className="item3">
                        {/* <div className="servicesbox">
                <FullWidthTabs/>
                </div> */}

                        <div className="colorbox">
                            <div className="onlinebox">
                                <div className="writingleftbox">
                                    <div className="FChomeicon">
                                        <FcHome style={{ height: 60, width: 60 }} />
                                        <h19>Stay Home Stay Fit</h19>
                                    </div>


                                    <br />
                                    <p> This platform hepls you to make yourself fit by providing Fitness and exercises tips as per needs.  </p>


                                    <div className="FcDisclaimer">
                                        <FcDisclaimer style={{ height: 60, width: 60 }} />
                                        <h19>No Limitation</h19>
                                    </div>


                                    <br />
                                    <p>no Limitation boundary, as we can reach out almost every doctor easily no need to travell city to city, country to country.
                                        easy access to the professionals. Get the exact service as prescribed no need to rush. </p>
                                </div>
                            </div>
                            <div className="leftbox">
                                <div className="writingrightbox">
                                    <div className="FCicon">
                                        <FcServices style={{ height: 60, width: 60 }} /></div>

                                    <h17>Services</h17>
                                    <br />
                                    <p>We provide multiple fields in online
                                        consultation related to doctors as well as medicine. </p>
                                    <br />



                                    <FcFinePrint style={{ height: 60, width: 60 }} />
                                    <h18>Career </h18>
                                    <p>Specifically focusing: In pakistan 77% women are not able to continue their practice in medical after they get married this platform provides the ease of practice in their desired Discipline/field. </p>
                                </div>
                            </div>
                            <div className="centerbox">
                                <img src="https://1.bp.blogspot.com/-K53kHNgBnKE/YSZGEIRotNI/AAAAAAAAC-Q/HOvTzM8Y2L8ZNXV4Zok7lisB855LKT8MgCLcBGAsYHQ/s1308/Smiling-Young-Indian-Lady-Doctor-Transparent-Image.png?dl=1" />
                            </div>
                        </div>
                    </div>

                    <div className="item4">
                        <div className="contimage">
                            <img src="https://www.datocms-assets.com/53681/1631976983-contact-us-banner.jpeg" />

                            <div className="contactbox">
                                <comments />
                                <h20>Follow Us :</h20>
                                <SiInstagram style={{ height: 40, width: 40, color: "rgb(228, 81, 62)" }} />
                                <p>Instagram</p>
                                <SiLinkedin style={{ height: 40, width: 40, color: "rgb(52, 91, 218)" }} />
                                <p>Linkedin</p>
                                <SiTwitter style={{ height: 40, width: 40, color: "#176cbb" }} />
                                <p>Twitter </p>
                                <SiFacebook style={{ height: 40, width: 40, color: "rgb(52, 91, 218)" }} />
                                <p>Facebook</p>


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
export default About;