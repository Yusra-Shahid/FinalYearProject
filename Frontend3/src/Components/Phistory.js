import React, { useState, useEffect } from "react";
import { storage } from "../firebase/index";
import Navbar from './navbar';
import axios from 'axios';
import "../Css/Phistory.css";
import { Image } from "antd";
import Footer from './footer';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { BsPersonFill, BsFillEnvelopeFill, BsCameraFill } from "react-icons/bs";
import ControlledAccordions from './ButtonComponent/accordin';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { v4 as uuid } from 'uuid';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import { FaPhoneAlt } from "react-icons/fa";
import { FcVideoCall } from "react-icons/fc";

function Phistory() {
    const [profileupdate, setprofileupdate] = useState('false');
    const [Img, setImg] = useState(false)
    const [Appointment, setAppointment] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [data, setData] = useState('');
    const [tracker, settracker] = useState('');
    const [Imgurl, setImgurl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")


    const handleChangeimage = async (e) => {


    }

    useEffect(async () => {

        axios.post('https://imedcare.herokuapp.com/request/appp', {

            email: localStorage.getItem("email"),

        }).then(function (response) {
            setAppointment(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);


        })

        //     .then(res => res.json()
        //     // console.log(res)
        //   )
        //   .then(result => setMessegee(result))

        //   .catch(error => console.log('error', error));

        console.log(Appointment)


    }, 10000000)



    return (
        <>
            {profileupdate === "true" && <>

                <div className="profileupdatepopupbg" ></div>

                <div className="profileupdate" >


                    <input type="file" required='true' name='photo' id="photo" accept="image/*" onChange={async (e) => {
                        console.log(e.target.files[0])
                        await setImg(e.target.files[0]);


                        const imageid = uuid();

                        await storage.ref(`dp/${imageid}`).put(Img);


                        const Url = await storage.ref(`dp`).child(imageid).getDownloadURL();
                        await setImgurl(Url);

                        await console.log(Url)
                    }} />
                    <img src={Imgurl} className="profileimage" />

                    <div>

                        <button onClick={() => { setprofileupdate("falses") }}>cancle</button>

                        <button onClick={() => { setprofileupdate("falses") }}>update</button>
                    </div>

                </div>

            </>}

            <Navbar />
            <div className="Viewdeptpage">

                {/* <div className="margin"></div> */}






                <div className="userpro"><div>User Profile</div>
                    {/* <div className="circle">
                        <BsCameraFill onClick={() => { setprofileupdate("true") }} type="file" style={{ height: 20, width: 20, color: "#176cbb" }} />

                    </div> */}


                    <div class="cardEX physical">
                        <div class="frontEX">
                            <img src="https://as1.ftcdn.net/v2/jpg/01/83/55/76/1000_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg" />
                        </div>
                        <div class="backEX">
                            <div class="backEX-content physical">

                                <div className="usercard">
                                    <div className={"userinput"}>
                                        <BsPersonFill
                                            style={{ height: 20, width: 20, color: "#176cbb" }} />
                                        <input className="Naaminput" value={localStorage.getItem("p_name")} style={{ width: 30, height: 30, color: "black" }} />
                                    </div>


                                    <div className={"userEmail"}>
                                        <BsFillEnvelopeFill style={{ height: 20, width: 20, color: "#176cbb" }} />
                                        <input className="Emailinput" value={localStorage.getItem("email")} style={{ width: 30, height: 30, color: "black" }} />
                                    </div>

                                    <div className={"userImg"}>
                                        <FaPhoneAlt style={{ height: 20, width: 20, color: "#176cbb" }} />
                                        <input className="Imginput" style={{ width: 30, height: 30, color: "black" }}
                                            defaultValue={data.Contact}
                                            placeholder={"Contact Number"}
                                            onChange={e => { setContact(e.target.value) }} />
                                    </div>



                                    <button onClick={() => { alert("your details are updated") }}>update</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <div className="usercard">
                        <div className={"userinput"}>
                            <BsPersonFill
                                style={{ height: 20, width: 20, color: "#176cbb" }} />
                            <input className="Naaminput" style={{ width: 30, height: 30, color: "black" }} />
                        </div>


                        <div className={"userEmail"}>
                            <BsFillEnvelopeFill style={{ height: 20, width: 20, color: "#176cbb" }} />
                            <input className="Emailinput" style={{ width: 30, height: 30, color: "black" }} />
                        </div>
                    </div> */}
                </div>

                {/* <div className="circle">
        <BsCameraFill style={{ height: 20, width: 20, color: "#176cbb" }}/>
        </div> */}
                <div className="userdetails">
                    <div className="detailshanding">Appointment Histories</div>
                    <ControlledAccordions />
                </div>

                <div className="leftcard">
                    <div className="leftcard-heading">
                        Up Coming Appointment
                    </div>

                    <div className="leftcard-scroll">


                        {Appointment.map((data) => (<>
                            {data.status === "pending" && <>
                                <div className="appDetails">
                                    <a>
                                        Doctor Name: {data.doctor}
                                        <br></br>
                                        Date: {data.Date}
                                        <br></br>
                                        timing: {data.Time}
                                        <br></br>
                                        Your Calling ID:{data.appointID}
                                    </a>
                                    <div>
                                        {/* <AutorenewIcon style={{ height: 30, width: 30, color: "#176cbb" }} /> */}
                                        <DisabledByDefaultIcon style={{ height: 30, width: 30, color: "#176cbb" }} />
                                        <a href="https://yusra-shahid.github.io/IMedCarevideoCall/">
                                            <FcVideoCall style={{ height: 30, width: 30 }} />
                                        </a>

                                    </div>



                                </div></>}</>
                        ))}
                    </div>
                </div>

            </div>


            <Footer />
        </>

    );
}
export default Phistory;