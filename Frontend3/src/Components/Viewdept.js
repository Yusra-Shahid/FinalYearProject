import React from "react";
import Navbar from './navbar';
import "../Css/Viewdept.css";
import Footer from './footer';
import Button from '@mui/material/Button';
import { Link, useHistory } from "react-router-dom";
//import view from '../Components/ButtonComponent/View'

const Viewdept = () => {
    const name = localStorage.getItem('p_name');
    const history = useHistory();
    function submitButton(value) {

        // value = 'Orthologist';
        alert(value)
        history.push('/SelectDoctor', { state: { name: value } });

    }
    return (

        <> 
         <Navbar />
            <div className="deptpage">
                <div className="margin"></div>
                <div className=" cardContainer ">
                    <div className="imgslider-A">
                    </div>

                    <div className=" deptText">
                        <h1>Orthopaedics</h1>
                        <p>The medical specialty that focuses on injuries and diseases of your body's musculoskeletal system</p>
                        <div className="viewbtn">
                            {/* <Link to={{
                                pathname: '/SelectDoctor',
                                state: { name: "orthopaeics" }
                            }}> */}
                            <Button size="small" onClick={() => submitButton("Orthologist")}>View DOCTOR</Button>
                            {/* </Link> */}
                            {/* <Button size="small">CONFIRMED DOCTOR</Button> */}
                        </div>
                    </div>
                </div>

                {/* second */}

                <div className="secmargin"></div>
                <div className=" cardContainer ">
                    <div className="imgslider-B">
                    </div>
                    {/* <div className="deptimg">
                <img src="https://cdn.wallpapersafari.com/98/44/pW4bT5.jpg" width={400}/>
            </div> */}
                    <div className=" deptText">
                        <h1>Gynaecology and Obstetrics.</h1>
                        <p> obstetrics and gynecology is the medical specialty that encompasses the
                            two subspecialties of obstetrics (covering pregnancy, childbirth,
                            and the postpartum period) and gynecology (covering the health of
                            the female reproductive system) </p>
                        <div className="viewbtn">
                            <Button size="small" onClick={() => submitButton("Gynaecologiest")}>View DOCTOR</Button>

                            {/* <Link to="/SelectDoctor">
                                <Button size="small">View DOCTOR</Button> </Link> */}
                        </div>
                    </div>
                </div>

                {/* third       */}

                <div className="secmargin"></div>
                <div className=" cardContainer">
                    <div className="imgslider-C">
                    </div>
                    <div className=" deptText">
                        <h1>Chest and Vascular</h1>
                        <p>Specially trained to perform operations on the heart and blood vessels of the body and related areas in the chest.</p>
                        <div className="viewbtn">
                            {/* <Link to="/SelectDoctor">
                                <Button size="small">View DOCTOR</Button> </Link> */}
                            <Button size="small" onClick={() => submitButton("Chest Specialist")}>View DOCTOR</Button>
                        </div>
                    </div>

                </div>
                <div className="secmargin"></div>
                <div className="cardContainer">
                    <div className="imgslider-D">
                    </div>
                    <div className=" deptText">
                        <h1> Dermatology</h1>
                        <p> A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems. </p>
                        <div className="viewbtn">
                            <Button size="small" onClick={() => submitButton("Dermatogist")}>View DOCTOR</Button>

                            {/* <Link to="/SelectDoctor">
                                <Button size="small">View DOCTOR</Button> </Link> */}
                        </div>
                    </div>
                </div>


                <div className="secmargin"></div>
                <div className="cardContainer">
                    <div className="imgslider-E">
                    </div>
                    <div className=" deptText">
                        <h1> Psychiatry</h1>
                        <p> Focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders </p>
                        <div className="viewbtn">
                            {/* <Link to="/SelectDoctor">
                                <Button size="small">View DOCTOR</Button> </Link> */}
                            <Button size="small" onClick={() => submitButton("Psychiatriest")}>View DOCTOR</Button>


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>

    );

}
export default Viewdept;