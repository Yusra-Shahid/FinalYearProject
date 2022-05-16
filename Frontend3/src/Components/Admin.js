import React, { useState, useEffect } from "react";
import "../Css/Admin.css";
import { Alert, Layout, Table } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { Line, Pie } from "react-chartjs-2";
import Navbar from "./navbar";
import { HiUserGroup } from "react-icons/hi";
import MuiVirtualizedTable from "./ButtonComponent/Table"
import { MdOutlinePersonSearch } from "react-icons/md";
import Grapy from "./ButtonComponent/Graph";
import Carousel from "react-elastic-carousel";
import axios from 'axios';


const breakPoints = [

    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 500, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 950, itemsToShow: 5 },
];




export default function Admin() {

    const [docApproval, setdocApproval] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/getApproval`)
            .then((Response) => {
                setdocApproval(Response.data)
                console.log(Response.data);
                // if (Response.data.length === 0) {
                //     alert("No doctor avaliable please visit later");
                //     history.push("/");
                // }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);







    {
        return (<Layout>
            <Navbar />
            <div className="AdminMainContainer">
                <div className="Admin_Container1">
                    <div className="sub-categies1">
                        <div className="dr-icon">
                            <HiUserGroup style={{ height: 50, width: 50, color: "#176cbb" }} />
                            <p>Doctors</p>
                        </div>
                        <div className="center-Line">
                            <p>------------------------</p>
                        </div>
                        <div className="dr-countor">
                            <p>541</p>
                        </div>
                    </div>
                    <div className="sub-categies2">
                        <div className="Pt-icon">
                            <HiUserGroup style={{ height: 50, width: 50, color: "#176cbb" }} />
                            <p>Patients</p>
                        </div>
                        <div className="dash-Line">
                            <p>------------------------</p>
                        </div>
                        <div className="pt-countor">
                            <p>435</p>
                        </div>
                    </div>

                    <div className="sub-categies3">
                        <div className="Pt-icon">
                            <HiUserGroup style={{ height: 50, width: 50, color: "#176cbb" }} />
                            <p>Phymacies</p>
                        </div>
                        <div className="dash-Line">
                            <p>------------------------</p>
                        </div>
                        <div className="pt-countor">
                            <p>435</p>
                        </div>
                    </div>

                    <div className="sub-categies4">
                        <div className="exer-icon">
                            <HiUserGroup style={{ height: 50, width: 50, color: "#176cbb" }} />
                            <p>Exercise Trainers</p>
                        </div>
                        <div className="exer-Line">
                            <p>------------------------</p>
                        </div>
                        <div className="exer-countor">
                            <p>435</p>
                        </div>
                    </div>

                </div>
                <div className="Admin_Container2">
                    <div className="Table-side">
                        <div className="table-text">
                            <p>Doctors</p>
                            <div className="search-field">
                                <div className="search-icon">
                                    <MdOutlinePersonSearch style={{ height: 40, width: 40, color: "#176cbb" }} />
                                </div>
                                <hr />
                                <div className="search-text">
                                    <input
                                        placeholder={"Search by Name"} />
                                </div>
                            </div>
                        </div>
                        <div className=" Pt-table">


                            <MuiVirtualizedTable />
                        </div></div>
                    <div className="graph-side">
                        <p>Departments</p>
                        <Grapy />
                    </div>


                </div>
                <div className="Admin_Container3">

                    <div className="reg-dr">
                        <Carousel breakPoints={breakPoints} justify-content='center' align-items='center' color='#176cbb'>
                            <div className="dr-1">
                                <div className="dr-inner-img">
                                    {/* <image src="http://themeatelier.net/site-templates/clinica/img/doctors/detail-doctor.jpg"/> */}
                                </div>
                                <div className="dr-inner-content">
                                    <p>Dr.sysla j smith
                                        <br />
                                        Doctor
                                    </p>
                                </div>
                            </div>
                            <div className="dr-1">  <div className="dr-inner-img"></div>
                                <div className="dr-inner-content">

                                    <p>Dr.sysla j smith
                                        <br />
                                        Doctor
                                    </p>
                                </div>
                            </div>
                            <div className="dr-1">   <div className="dr-inner-img"></div>
                                <div className="dr-inner-content">

                                    <p>Dr.sysla j smith
                                        <br />
                                        Doctor
                                    </p>

                                </div>
                            </div>
                            <div className="dr-1">   <div className="dr-inner-img"></div>
                                <div className="dr-inner-content">
                                    <p>Dr.sysla j smith
                                        <br />
                                        Doctor
                                    </p></div>
                            </div>
                            <div className="dr-1">   <div className="dr-inner-img"></div>
                                <div className="dr-inner-content">
                                    <p>Dr.sysla j smith
                                        <br />
                                        Doctor
                                    </p>
                                </div>
                            </div>
                            <div className="dr-1">   <div className="dr-inner-img"></div>
                                <div className="dr-inner-content">
                                    <p>Dr.sysla j smith
                                        <br />
                                        Doctor
                                    </p>
                                </div>
                            </div>

                        </Carousel>
                    </div>


                </div>
                <div className="Admin_Container4">
                    <div className="right-side">
                        <div className="profile-text">
                            <p> Doctor's approval </p>
                        </div>
                        <div className="admin-profile">

                            {docApproval.map((data) => (
                                <div className="Dr-data">

                                    <h4>Doctor name: {data.name}</h4>
                                    <p>Email: {data.email}
                                        <br />
                                        contact number: {data.contact}
                                        <br />
                                        speciality:{data.specaility}
                                    </p>

                                    <div className="approval-btn">
                                        <button onClick={() => {

                                            axios.post('http://localhost:5000/user/accept', {
                                                name: data.name,
                                                email: data.email,
                                                password: data.password,
                                                contact: data.contact,
                                                userType: data.usertype,
                                                specaility: data.spe,
                                            })
                                                .then(function (response) {
                                                    console.log(response);
                                                    
                                                })
                                                .catch(function (error) {

                                                    alert(error)

                                                })


                                        }}>Approve</button>
                                        <button onClick={() => {

                                            axios.post('http://localhost:5000/user/rejectApproval', {

                                                email: data.email,

                                            })
                                                .then(function (response) {
                                                    Alert(response);

                                                })
                                                .catch(function (error) {

                                                })

                                            axios.get(`http://localhost:5000/user/getApproval`)
                                                .then((Response) => {
                                                    setdocApproval(Response.data)
                                                    console.log(Response.data);
                                                    // if (Response.data.length === 0) {
                                                    //     alert("No doctor avaliable please visit later");
                                                    //     history.push("/");
                                                    // }
                                                })
                                                .catch((error) => {
                                                    console.log(error)
                                                })


                                        }}>Reject</button>
                                    </div>
                                </div>
                            )
                            )}

                        </div>
                    </div>





                    <div className="lift-side">
                        <div className="table-text">
                            <p>Appointments</p>
                            <div className="search-field">
                                <div className="search-icon">
                                    <MdOutlinePersonSearch style={{ height: 40, width: 40, color: "#176cbb" }} />
                                </div>
                                <hr />
                                <div className="search-text">
                                    <input
                                        placeholder={"Search Paitents"} />
                                </div>
                            </div>
                        </div>
                        <div className=" Pt-table">

                            <MuiVirtualizedTable />
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
// export default Admin;