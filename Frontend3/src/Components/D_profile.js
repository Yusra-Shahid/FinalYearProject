import React, { useState, useEffect } from "react";
import Navbar from './navbar';
import "../Css/D_profile.css";
import axios from "axios";
import { BsPersonFill, BsFillEnvelopeFill, BsPhone, BsPersonDash, BsPersonBoundingBox, BsPersonCheck } from "react-icons/bs";
import { FaPhoneAlt, FaUserMd } from "react-icons/fa";
import { AiOutlineFund, AiFillFile } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";
import { IoMdCash } from "react-icons/io";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Footer from './footer'
import { Form, Row } from 'react-bootstrap';
import { storage } from "../firebase/index";
import { v4 as uuid } from 'uuid';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Morningoptions = ["Morning", "Afternoon", "Evening"];
// const noonoptions = ["1:00PM", "1:30PM", "2:00PM", "2:30PM"];
// const eveningoptions = ["6:00AM", "6:30AM", "7:00AM", "7:30AM"];


const D_profile = () => {
    const [data, setData] = useState('');
    const [exprience, setExprience] = useState('');
    const [fees, setFee] = useState('');
    const [age, setAge] = useState('');
    const [timeslote, setTimeslote] = useState('');
    const [contact, setContact] = useState('');
    const [account, setAccount] = useState('');
    const [emails, setEmails] = useState('');
    const [name, setName] = useState('');
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






    function handleSubmit(event) {
        event.preventDefault()

        console.log(name, age, timeslote, data._id);
        axios.put("https://imedcare.herokuapp.com/doctor/update_doctor", {
            _id: data._id,
            name: name || data.name,
            email: emails || data.email,
            contact: contact || data.contact,
            specaility: data.specaility,
            age: age || data.age,
            exprience: exprience || data.exprience,
            fee: fees || data.fee,
            account: account || data.account,
            timeslote: timeslote || data.timeslote,
            imgurl : Imgurl
        })
            .then(function (response) {
                console.log(response);
                alert("update");

            })
            .catch(function (error) {

                alert("Not Update")

            })

    }

    const email = localStorage.getItem('email');
    useEffect(() => {
        axios.get(`https://imedcare.herokuapp.com/doctor/getDoctor/${email}`)
            .then((Response) => {
                setData(Response.data)
                if (Response.data.length === 0) {
                    alert("No REcord Found");
                    // history.push("/");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    console.log(data);

    return (
        <>
            <Navbar />

            <div className="section"></div>
            <div className="profile-img">
                {/* <h11> DOCTOR MANAGAMENT</h11> */}

            </div>
            <form method="POST" onSubmit={handleSubmit}>
                <div className="d-form">
                    <div className="phleform">
                        <div className={"D_inputContainer"}>
                            <BsPersonFill
                                style={{ height: 20, width: 20, color: "#176cbb" }}

                            />
                            <input
                                className={"writenameinput"}
                                type={"text"}
                                placeholder={"NAME"}
                                name={"name"}
                                defaultValue={data.name}
                                onChange={e => { setName(e.target.value) }}
                            />
                        </div>
                        <div className={"D_inputContainer"}>
                            <BsFillEnvelopeFill
                                style={{ height: 20, width: 20, color: "176cbb" }}

                            />
                            <input
                                className={"writeemailinput"}
                                type={"text"}
                                placeholder={"E-mail"}
                                name={"email"}
                                defaultValue={data.email}
                                onChange={e => { setEmails(e.target.value) }}
                            />
                        </div>

                        <div className={"D_inputContainer"}>
                            <BsPersonCheck
                                style={{ height: 20, width: 20, color: "176cbb" }}

                            />
                            <input
                                className={"ageinput"}
                                type={"text"}
                                placeholder={"AGE"}
                                name={"age"}
                                defaultValue={data.age}
                                onChange={e => { setAge(e.target.value) }}
                            />
                        </div>

                        <div className={"D_inputContainer"}>
                            <BsPersonCheck
                                style={{ height: 20, width: 20, color: "176cbb" }}

                            />
                            <input
                                className={"ageinput"}
                                type={"text"}
                                placeholder={"Contact"}
                                name={"contact"}
                                defaultValue={data.contact}
                                onChange={e => { setContact(e.target.value) }}
                            />
                        </div>


                        <div className={"D_inputContainer"}>
                            <FaUserMd
                                style={{ height: 20, width: 20, color: "176cbb" }} />
                            <input
                                className={"specailityinput"}
                                type={"text"}
                                placeholder={"SPECAILITY"}
                                name={"specaility"}
                                defaultValue={data.specaility}


                            />
                        </div>

                        <div className={"D_inputContainer"}>
                            <AiOutlineFund
                                style={{ height: 20, width: 20, color: "176cbb" }} />
                            <input
                                className={"specailityinput"}
                                type={"text"}
                                placeholder={"EXPRIENCE"}
                                name={"exprience"}
                                defaultValue={data.exprience}
                                onChange={e => { setExprience(e.target.value) }}
                            />
                        </div>
                    </div>

                    <div className="dusraform">

                        <div className={"D_inputContainer"}>

                            <IoMdCash
                                style={{ height: 20, width: 20, color: "176cbb" }} />
                            <input
                                className={"specailityinput"}
                                type={"text"}
                                placeholder={"FEE AMOUNT"}
                                name={"fee_amount"}
                                defaultValue={data.fee}
                                onChange={e => { setFee(e.target.value) }}
                            />
                        </div>

                        <div className={"D_inputContainer"}>
                            <RiBankFill
                                style={{ height: 20, width: 20, color: "176cbb" }} />
                            <input
                                className={"specailityinput"}
                                type={"text"}
                                placeholder={"EASYPASIA ACOUNT NUMBER"}
                                name={"acountnumber"}
                                defaultValue={data.account}
                                onChange={e => { setAccount(e.target.value) }}
                            />
                        </div>
                        <div className={"DoctorDropdownBox"}>
                            <BsPersonFill
                                style={{ height: 20, width: 20,marginBottom:40, color: "#176cbb" }}
                            />
                            <Form.Group className="Doc-dropdown-Layout"
                                value={timeslote}
                                required="true"

                                onChange={e => setTimeslote(e.target.value)}>
                                <Form.Control as="select" defaultValue="--Select--"
                                    className="D-dropdown-Layout" placeholder={"Select User Type"}>
                                    <option className="placeholder-color">--Select your TimeSlote--</option>
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>evening</option>

                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className={"D_inputContainer"}>
                            <AddPhotoAlternateIcon
                                style={{ height: 20, width: 20, color: "176cbb" }} />
                            
                            <input 
                            type="file" 
                            required='true'
                            name='photo'
                            id="photo" 
                            accept="image/*" 
                            onChange={handleChangeimage} />
                        </div>
                     


                        {/* <div className={"inputContainer"}>
                        <AiFillFile
                            style={{ height: 20, width: 20, color: "176cbb" }}/>
                        <input
                            className={"specailityinput"}
                            type={"text"}
                            placeholder={"IMPORT FILE"}
                            name={"importfile"}
                        />
                    </div>   */}


                        {/* <div className={"DropdownBoxmorning"}>
                            <BsPersonFill
                                style={{ height: 20, width: 20, color: "#176cbb" }}
                            />
                            <Dropdown
                                options={Morningoptions}
                                controlClassName="myControlclassmorning"
                                className={"myClassNamemorning"}
                                onChange={e => { setTimeslote(e.target.value) }}
                                //  value={defaultOption}
                                //   value={usertype}
                                menuClassName="myMenuClassmorning"
                                placeholder="Available  timing..."
                            />

                        </div> */}
                        <div className="uploaded">
                            <button>update</button>
                        </div>

                        {/* <div className={"DropdownBoxnoon"}>
                        <BsPersonFill
                            style={{ height: 20, width: 20, color: "#176cbb" }}
                        />
                        <Dropdown
                            options={noonoptions}
                            controlClassName="myControlclassnoon"
                            className={"myClassNamenoon"}
                            //   onChange={e => {setUsertype(e.target.value)}}
                            //  value={defaultOption}
                            //   value={usertype}
                            menuClassName="myMenuClassnoon"
                            placeholder="Available afternoon timing..."
                        />

                    </div>


                    <div className={"DropdownBoxevening"}>
                        <BsPersonFill
                            style={{ height: 20, width: 20, color: "#176cbb" }}
                        />
                        <Dropdown
                            options={eveningoptions}
                            controlClassName="myControlclassevening"
                            className={"myClassNameevening"}
                            //   onChange={e => {setUsertype(e.target.value)}}
                            //  value={defaultOption}
                            //   value={usertype}
                            menuClassName="myMenuClassevening"
                            placeholder="Available evening timing..."
                        />

                    </div> */}



                    </div>

                </div>
            </form>
            {/* <div className="viewpatient"></div>  */}
            <Footer />
        </>

    );
}
export default D_profile;
