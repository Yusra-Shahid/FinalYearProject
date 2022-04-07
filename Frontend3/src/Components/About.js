import React, { Component } from "react";
import "../Css/About.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";
import CustomizedTimeline from "./ButtonComponent/Process"
import { FcServices ,FcFinePrint,FcHome} from "react-icons/fc";

import { SiFacebook,SiLinkedin,SiTwitter,SiInstagram } from "react-icons/si";

// import { red } from "@mui/material/colors";
// import FullWidthTabs from "./ButtonComponent/Abouthai.js"
// import { AiFillFacebook , AiFillTwitterCircle , AiFillInstagram} from "react-icons/ai";
// import CloseButton from 'react-bootstrap/CloseButton'

export class About extends Component {
    render() {
        return (<Layout>
            <Navbar />
            <div className={"aboutContainer"}>
            <div className="mainitem">
            <div className="item1" >
            <div  className="our-purpose">
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
            <video autoPlay controls/>
            <source src="" type="video/mp4"/>
           </div>
            </div>

            <div className="item3">
                {/* <div className="servicesbox">
                <FullWidthTabs/>
                </div> */}
              
            <div className="colorbox">
            <div className="onlinebox">
            <div className="writingleftbox">
            <FcHome style={{ height: 60, width: 60 }}/>
            <h19>Stay Home Stay Fit</h19>
            <br/>
            <p> Our site hepls you to make yourself fit by provide Fitness tips and exercises </p>
            </div>
            </div>
            <div className="leftbox">
                <div className="writingrightbox">
                    <FcServices style={{ height: 60, width: 60 }}/>
                    <h17>Services</h17>
                    <br/>
                    <p>We are provide multiple field online consultation that are </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <FcFinePrint  style={{ height: 60, width: 60 }}/>
                    <h18>Career </h18>
                    <p>In pakistan 77% women doesn't able to continue their practices in medical after the married this is the platform where everyone can practice </p>
                </div>
            </div>
            <div className="centerbox">
                <img src="https://1.bp.blogspot.com/-K53kHNgBnKE/YSZGEIRotNI/AAAAAAAAC-Q/HOvTzM8Y2L8ZNXV4Zok7lisB855LKT8MgCLcBGAsYHQ/s1308/Smiling-Young-Indian-Lady-Doctor-Transparent-Image.png?dl=1"/>
            </div>
            </div>
            </div>

            <div className="item4">
                <div className="contimage">
                <img src="https://www.datocms-assets.com/53681/1631976983-contact-us-banner.jpeg"/>
                <div className="contactbox">
                    <h20>Follow Us :</h20>
                <SiInstagram style={{ height: 40, width: 40 ,color:"rgb(228, 81, 62)"}}/>
                <p>Instagram</p>
                <SiLinkedin style={{ height: 40, width: 40 , color:"rgb(52, 91, 218)"}}/>
                <p>Linkedin</p>
                <SiTwitter style={{ height: 40, width: 40 ,color: "#176cbb"}}/>
                <p>Twitter </p>
                <SiFacebook style={{ height: 40, width: 40,color:"rgb(52, 91, 218)" }}/>
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