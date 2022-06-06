import React, { Component } from "react";
import "../Css/Lab.css";
import { Layout, Table } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { Line, Pie } from "react-chartjs-2";
import Navbar from "./navbar";

import Button from '@mui/material/Button';


export class Lab extends Component {
    render() {
        return (<Layout>
            <Navbar />

            <div className="LabMainContainer">

                <div className="lab-head">
                    <div className=" lab-img-1">
                        <div className=" lab-img-2 ">
                            <h21>Medical Laboratory</h21>
                            <p>We are a full-service clinical and anatomical pathology laboratory serving Maryland, New Jersey,
                                New York, Virginia, Washington DC, and West Virginia.</p>
                        </div>


                    </div>


                    <div className=" lab-img-3">

                    </div>
                </div>


                <div className="lab-head">
                    <div className="age-lab-content">
                        <h23> Aga Khan University Hospital</h23>
                        <p>The Clinical Laboratories of the Aga Khan University Hospital offer a test menu of 700 tests in the areas of hematology, clinical chemistry, microbiology, histopathology, molecular pathology, blood bank and transfusion services for our visiting (outpatients) and hospital admitted patients (inpatients). It is a state-of-the-art laboratory program providing the highest number of unique and routine and esoteric testing across the country. Robotic analyzers on a fully automated platform for Chemistry and Hematology, strengthen our advanced Histopathology, Molecular Pathology, Microbiology and Biochemical Genetic Laboratory services</p>
                        <form action="https://hospitals.aku.edu/pakistan/patients-families/Pages/reportlogin.aspx">
                            <input type="submit" value="Go to lab" />
                        </form>
                    </div>

                    <div className="age-lab-image">
                    <img src="https://hospitals.aku.edu/Pakistan/medical-and-diagnostics/clinical-labs/PublishingImages/05.jpg"/>
                    </div>
                </div>



                <div className="lab-head">
                    <div className="age-lab-content">
                        <h23> Chughtai Lab</h23>
                        <p>Chughtai Lab and Healthcare has been providing quality diagnostic services in Pakistan since 1983. Over the past 37 years, we have focused on the provision of innovative and high-quality pathology services, and have expanded into multiple related areas of healthcare. Since our inception, we have delivered healthcare services to our patients with timely results and accurate diagnosis. The lab operates 24 hours a day, every day of the year, ensuring our patients can avail our services at all times</p>
                        <form action="https://chughtailab.com/">
                            <input type="submit" value="Go to lab" />
                        </form>
                    </div>
                    <div className="age-lab-image">
                        <img src="https://pbs.twimg.com/media/EeBwlTfX0AIiRwS.jpg:large"/>
                    </div>
                </div>

    

                <div className="lab-head">
                    <div className="age-lab-content">
                        <h23> Dr. Essa Laboratory</h23>
                        <p>Our more than 1000 professionally-trained staff, conveniently-located Patient Service Centers and extensive network of couriers and mobile phlebotomists enable us to deliver care at home, in the community and across Pakistan.”
“At every step in the testing process, from collection to reporting, our goal is to deliver caring, compassionate, quality service that contributes to enhanced patient care.</p>
                        <form action="https://oladoc.com/">
                            <input type="submit" value="Go to lab" />
                        </form>
                    </div>
                    <div className="age-lab-image">
                        <img src="https://s.rozee.pk/company_logos/62/12429939228807.png" style={{ marginTop: 180 }}/>
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
export default Lab;