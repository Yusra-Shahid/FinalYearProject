import React, { useState } from "react";
import { storage } from "../firebase/index";
import Navbar from './navbar';
import "../Css/Phistory.css";
import { Image } from "antd";
import Footer from './footer';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { BsPersonFill, BsFillEnvelopeFill, BsCameraFill } from "react-icons/bs";
import ControlledAccordions from './ButtonComponent/accordin';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { v4 as uuid } from 'uuid';



function Phistory() {
    const [profileupdate, setprofileupdate] = useState('false');
    const [Img, setImg] = useState(false)
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
                    <div className="circle">
                        <BsCameraFill onClick={() => { setprofileupdate("true") }} type="file" style={{ height: 20, width: 20, color: "#176cbb" }} />

                    </div>

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
                    </div>
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
                    <div className="appDetails">
                        <a>
                        Doctor Name: 
                        <br></br>
                        Date:
                        timing:
                        </a>
                        <div>
                        <AutorenewIcon  style={{ height: 30, width:30 , color: "#176cbb" }}/>
                        <DisabledByDefaultIcon style={{ height: 30, width:30 , color: "#176cbb" }}/>
                       
                        </div>
   
                    

                    </div>
                </div>

            </div>


            <Footer />
        </>

    );
}
export default Phistory;