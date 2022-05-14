import React, { Component } from "react";
import "../Css/Admin.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { Line, Pie } from "react-chartjs-2";
import Navbar from "./navbar";
import { HiUserGroup } from "react-icons/hi";
import MuiVirtualizedTable from "./ButtonComponent/Table"
import { MdOutlinePersonSearch } from "react-icons/md";
import Grapy from "./ButtonComponent/Graph";




export class Admin extends Component {
    render() {
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
                        <p>Patient</p>
                        <div className="search-field">
                            <div className="search-icon">
                                <MdOutlinePersonSearch style={{ height: 40, width: 40, color: "#176cbb" }} />
                            </div>
                            <hr />
                            <div className="search-text">
                                <input
                                    placeholder={"Password"} />
                            </div>
                        </div>
                    </div>
                    <div className=" Pt-table">

                        <MuiVirtualizedTable />
                    </div></div>
                    <div className="graph-side"> 
                    <Grapy/>
                    </div>
                    {/* <div className="table-text">
                        <p>Patient</p>
                        <div className="search-field">
                            <div className="search-icon">
                                <MdOutlinePersonSearch style={{ height: 40, width: 40, color: "#176cbb" }} />
                            </div>
                            <hr />
                            <div className="search-text">
                                <input
                                    placeholder={"Password"} />
                            </div>
                        </div>
                    </div>
                    <div className=" Pt-table">

                        <MuiVirtualizedTable />
                    </div>
                   */}

                </div>
                <div className="Admin_Container3">
                   
                </div>
                <div className="Admin_Container4">
                <div className="right-side"> </div>
                    <div className="lift-side"> 
                    
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
export default Admin;