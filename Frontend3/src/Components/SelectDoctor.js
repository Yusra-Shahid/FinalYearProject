import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from './navbar';
import ResponsiveDatePickers from "./ButtonComponent/Datepicker.js"
import "../Css/SelectDoctor.css";
//import "../Components/ButtonComponent/View.js";
import Button from '@mui/material/Button';
import { BsSearch, } from "react-icons/bs";
import "../Components/ButtonComponent/Datepicker.js";
import { DatePicker } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import Payment from "./Payment";
import axios from 'axios';
import { Radio } from 'antd';
import { Link } from "react-router-dom";

const SelectDoctor = (props) => {
    const [active, setActive] = useState("fasle")
    const [active1, setActive1] = useState("fasle")
    const [dname, setDname] = useState('');
    const [demail, setDemail] = useState('');
    const [value, setValue] = useState('');

    const [doctor_data, setDoctor_data] = useState('');
    const [date, setDate] = useState('');
    const [req, setReq] = useState('');
    const [btnn, setbtnn] = useState(true);

    const history = useHistory();
    const patient = localStorage.getItem('p_name');
    const email = localStorage.getItem('email');


    const Handleclick = (name) => {
        console.log("dscs" + name)
        // console.log("name " +name )

        setDname(name); setActive("True");
    }

    const Handleclick1 = () => { setActive("fasle"); }
    const hanldelogin = () => {
        history.push("/loginpage")
    }
    const hanldeSubmit = () => {
        // alert("in")

        setbtnn(false)
        if (value !== '' && date !== '' && patient !== '') {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();


            // var dd = 17 ;
            // var mm = 08;
            // var yyyy = 2021 ;

            const Todayis = yyyy + '-' + mm + '-' + dd;



            console.log(Todayis)
            console.log(date)
            if ( date == Todayis){

                axios.post('https://imedcare.herokuapp.com/request/new_req', {

                    patient: patient,
                    doctor: dname,
                    doctoremail:demail,
                    date: date,
                    time: value,
                    status: "pending",
                    email: email,
                    Todayis:Todayis,
                })
                    .then(function (response) {
                        console.log(response);
                        alert("Your request is submited you will soon got email of confirmation");

                    })
                    .catch(function (error) {

                        alert(error)

                    })
            }
            else{alert("select upcoming date")}


            // axios.post('http://localhost:5000/request/new_req', {

            //     patient: patient,
            //     doctor: dname,
            //     doctoremail:demail,
            //     date: date,
            //     time: value,
            //     status: "pending",
            //     email: email,
            // })
            //     .then(function (response) {
            //         console.log(response);
            //         alert("Your request is submited you will soon got email of confirmation");

            //     })
            //     .catch(function (error) {

            //         alert(error)

            //     })
        }



    }
    const [data, setData] = useState([]);




    const location = useLocation();

    // console.log(location.state.name);
    const spe = props.location.state.state.name;

    useEffect(() => {
        axios.get(`https://imedcare.herokuapp.com/doctor/getspecialist/${spe}`)
            .then((Response) => {
                setData(Response.data)
                console.log(Response.data);
                if (Response.data.length === 0) {
                    alert("No doctor avaliable please visit later");
                    history.push("/");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (

        <>  <Navbar />
            {active === "True" &&
                <div className="popup">

                    <div className="popinfo">

                        <div className="popdays">
                            {/* <label for = "click" class="BsReverseBackspaceReverse"></label> */}
                            <AiOutlineClose onClick={Handleclick1}
                                style={{ height: 20, width: 20, color: "#176cbb)" }}
                            />
                            <div className="docIcon">
                                <img
                                    src="https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png" />
                            </div>

                            <div className="docname">

                                <h2>{dname}</h2>
                            </div>
                        </div>

                        <div className="choosedays">
                            <h2>Choose your time</h2>
                            <div className="dates">
                                {/* <ResponsiveDatePickers /> */}
                                <input type="date"
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <div className="mordiv">
                                <p>morning timing</p>
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={"9:00AM"}>9:00 AM</Radio>
                                    <Radio value={"9:30AM"}>9:30 AM</Radio>
                                    <Radio value={"10:00AM"}>10:00 AM</Radio>
                                    <Radio value={"10:30AM"}>10:30 AM</Radio>
                                </Radio.Group>


                            </div>


                            <div className="afternoon">
                                <p>afternoon timing</p>
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={"1:00PM"}>1:00 PM</Radio>
                                    <Radio value={"1:30PM"}>1:30 PM</Radio>
                                    <Radio value={"2:00AM"}>2:00 PM</Radio>
                                    <Radio value={"2:30AM"}>2:30 PM</Radio>
                                </Radio.Group>

                            </div>
                            <div className="afternoon">
                                <p>evening timing</p>
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={"4:00PM"}>4:00 PM</Radio>
                                    <Radio value={"4:30PM"}>4:30 PM</Radio>
                                    <Radio value={"5:00AM"}>5:00 PM</Radio>
                                    <Radio value={"5:30AM"}>5:30 PM</Radio>
                                </Radio.Group>

                            </div>
                       

                            {btnn === true && <> <div className="Con_btn">
                                <button onClick={hanldeSubmit}>confirm</button>
                            </div></>}
                            
                            {btnn === false && <>
                                <div style={{ margin: "5px" }} className="pay_btn">
                                    <Payment />
                                </div></>}
                        </div>

                    </div>
                </div>
            }

            <div className="DOCmargin"></div>
            <div className="Viewdeptpage">
                {/* <div className="menubar">
                <div className="search-box">
                    <input type="text" class="searchtext" placeholder="type for search . . ." />
                    <a href="#" class="searchbtn">
                        <BsSearch
                            style={{ height: 35, width: 35, color: "#176cbb)" }}
                        />
                    </a>

                </div>
            </div> */}

                {data.map((data) => (
                    <div className="cardcontainer">
                        <div className="docimg">
                            <img
                                width='100%'
                                height='100%'
                                src={data.imgurl || "https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png"} />
                        </div>

                        <div className=" content">
                            <h2>{data.name}</h2>
                            <p>{data.contact}<br />{data.email}<br />fee: RS{data.fee}
                            </p>
                            {/* <p>{data.email}</p> */}

                            <div className="btn">
                                <Button size="small" onClick={() => {
                                    setDname(data.name)
                                    setDemail(data.email)
                                    setActive("True")
                                    localStorage.setItem("payment",data.fee)
                                }}

                                >CONFIRMED DOCTOR</Button>

                            </div>
                        </div>
                    </div>))}
                {/* second cantainer */}
                {/* <div className="cardcontainer1">
                <div className="docimg">
                    <img
                        src="https://www.livemed.com.ng/medfiles/med-users/pix/775743male.jpg" />
                </div>
                <div className=" content" >
                    <h2>hello doctor</h2>
                    <p>specailish of baby care
                        hello baby how are you feeling now !
                    </p>
                    <div className="btn">
                        <Button size="small" onClick={Handleclick} >CONFIRMED DOCTOR</Button>
                    </div>
                </div>
            </div> */}
                {/* third */}

                {/* <div className="cardcontainer2">
                <div className="docimg">
                    <img
                        src="https://www.nanavatimaxhospital.org/controlpanel/uploadedfiles/gallery/1566555605_Dr.-Dummay_Female_310x310.jpg" />
                </div>
                <div className=" content">
                    <h2>hello doctor</h2>
                    <p>specailish of baby care
                        hello baby how are you feeling now !
                    </p>
                    <div className="btn">
                        <Button size="small" onClick={Handleclick} >CONFIRMED DOCTOR</Button>
                    </div>
                </div>
            </div> */}

            </div>
        </>

    );

}
export default SelectDoctor;