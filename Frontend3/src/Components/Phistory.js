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



function Phistory() {
    const [profileupdate, setprofileupdate] = useState('false');
    const [Img, setImg] = useState(false)
    const [Appointment, setAppointment] = useState([])
  
    const [Imgurl, setImgurl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")


    const handleChangeimage = async (e) => {
        console.log(e.target.files[0])
        setImg(e.target.files[0]);


        const imageid = uuid();

        await storage.ref(`dp/${imageid}`).put(Img);


        const Url = await storage.ref(`dp`).child(imageid).getDownloadURL();
        await setImgurl(Url)

        console.log(Url)

    }

    useEffect(async () => {

        axios.post('http://localhost:5000/request/appp', {

            email : localStorage.getItem("email"),
           
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
                    <img src={Imgurl} className="profileimage" />





                    <input type="file" required='true' name='photo' id="photo" accept="image/*" onChange={handleChangeimage} />


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
                             <img src="https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/11/6130270001_e4bbc718f5_b.jpg?w=900&ssl=1" />
                        </div>
                        <div class="backEX">
                            <div class="backEX-content physical">

                                <div className="usercard">
                                    <div className={"userinput"}>
                                        <BsPersonFill
                                            style={{ height: 20, width: 20, color: "#176cbb" }} />
                                        <input className="Naaminput" style={{ width: 30, height: 30, color: "black" }} />
                                    </div>


                                    <div className={"userEmail"}>
                                        <BsFillEnvelopeFill style={{ height: 20, width: 20, color: "#176cbb" }} />
                                        <input className="Emailinput" style={{ width: 30, height: 30, color: "black" }} />
                                    </div>

                                    <div className={"userImg"}>
                                        <AddPhotoAlternateIcon onClick={() => { setprofileupdate("true") }} type="file" style={{ height: 30, width: 30, color: "#176cbb" }} />
                                        <input className="Imginput" style={{ width: 30, height: 30, color: "black" }} />
                                    </div>
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
                    Up Coming Appointment
                 
                    {Appointment.map((data) => (
                 
                    <div className="appDetails">
                        <a>
                            Doctor Name: {data.doctor}
                            <br></br>
                            Date: {data.Date}
                            <br></br>
                            timing: {data.Time}
                        </a>
                        <div>
                            <AutorenewIcon style={{ height: 30, width: 30, color: "#176cbb" }} />
                            <DisabledByDefaultIcon style={{ height: 30, width: 30, color: "#176cbb" }} />

                        </div>



                    </div>
                   ))}
                </div>

            </div>


            <Footer />
        </>

    );
}
export default Phistory;