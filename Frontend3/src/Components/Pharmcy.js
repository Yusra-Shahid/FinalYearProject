import React, { Component } from "react";
import "../Css/Pharmacy.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import store1 from '../Images/store1.JPG';
import dawai from '../Images/dawai.JPG';
import davgo from '../Images/davgo.JPG'
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
                            <img src="https://monophy.com/media/YMpUBQeazNewnaLDw1/monophy.gif" style={{ height: 100, width: 100 }} />
                        </h23>
                        <div className="phar-head-para" >
                            <p>I-Medcare also provides online pharmacy.
                                You can easily order your medicines online. Be a part of this project and explore easy access to everything related to Medicine. Your problems our solutions get involved and have everything on finger tips</p>

                        </div>
                    </div>
                    <div className="phar-head-img">
                        <img src="https://www.vyrazu.com/wp-content/uploads/2021/10/Banner-for-Pharmacy-1-1.svg" />
                    </div>
                </div>
                <div className="pharmacy-head">
                    <div className="Pharma-1">
                        <h24>Medicalstore</h24>
                        <p>Online Medical Store Pakistan is committed to deliver its customers the very best prices on the best brands and original medicines in Karachi, Pakistan. We are committed to provide the best pharmacy service online. Like Online Medical Store no other online pharmacy in Pakistan can match our level of customer service, and industry-only policies including medicine request for non-available products, free delivery on orders above 3000 and price guarantee</p>
                        <form action="https://medicalstore.com.pk/">
                            <input type="submit" value="Browse pharmacy" />
                        </form>
                    </div>
                    <div className="Pharma-2">

                        <img src={store1} />
                    </div>
                </div>
                <div className="pharmacy-head">

                    <div className="Pharma-1">
                        <h24>Dawaai.PK</h24>
                        <p>Dawaai is Pakistan's most trusted online medical store. Order medicines, consult doctors online, get your lab tests done at home</p>
                        <form action="https://dawaai.pk/">
                            <input type="submit" value="Browse pharmacy" />
                        </form>
                    </div>
                    <div className="Pharma-2">

                        <img src={dawai} />
                    </div>

                </div>
                <div className="pharmacy-head">

                <div className="Pharma-1">
                        <h24>Dvago.PK</h24>
                        <p>Buy authentic pharmaceutical & wellness products from Online Pharmacy & Medical Store Online or Find a DVAGO Store near you</p>
                        <form action="https://dvago.pk/">
                            <input type="submit" value="Browse pharmacy" />
                        </form>
                    </div>
                    <div className="Pharma-2">

                        <img src={davgo} />
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
export default Pharmacy;