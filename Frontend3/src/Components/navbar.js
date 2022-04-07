import "../Css/Dashboard.css";
import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    const name = localStorage.getItem('p_name');
    const usertype = localStorage.getItem('UserType')
    return (
        <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%", paddingBottom: "5px", paddingTop: "5px" }}>
                <div className={"logo"}>
                    <img src={logo} />
                </div>


                <div className={"menu"}>

{usertype != "patient" && <>
{usertype != "doctor" && <>
                    <div className={"navigation"}>
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>HOME</p>
                        </Link>
                    </div>
                    </>}

                    </> }
                   
                   
                   
                   
                   
                    {usertype == "patient" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/Viewdept"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>doctors</p>
                        </Link>
                    </div>
                    
                    
                    </>}

                    {usertype == "patient" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/Doctors"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>Exercise</p>
                        </Link>
                    </div>
                    
                    
                    </>}

                    {usertype == "patient" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/Phistory"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>History</p>
                        </Link>
                    </div>
                    
                    
                    </>}
                    {usertype == "patient" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/Phistory"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>laboratory</p>
                        </Link>
                    </div>
                    
                    
                    </>}

                    {usertype == "doctor" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/patients"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>patients</p>
                        </Link>
                    </div>
                    
                    
                    </>}

                    {usertype == "doctor" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/dprofile"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>profile</p>
                        </Link>
                    </div>
                    
                    
                    </>}

                    {usertype == "doctor" && <>
                    
                    <div className={"navigation"}>
                        <Link
                            to="/Viewpatients"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "18px" }}>appointments</p>
                        </Link>
                    </div>
                    
                    
                    </>}




                    <div className={"navigation"}>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'rgb(247, 242, 242)' }}>
                            <p style={{ fontSize: "18px" }}>ABOUT</p>
                        </Link>
                    </div>
                    {name ?
                        <div className={"navigation"}>
                            <Link
                                to="/logout"
                                style={{ textDecoration: "none", color: "#553d82" }}
                            >
                                <p style={{ fontSize: "18px" }}>LOGOUT</p>
                            </Link>
                        </div>

                        :
                        <div className={"navigation"}>
                            <Link
                                to="/signuppage"
                                style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                                <p style={{ fontSize: "18px" }}>SIGNUP</p>
                            </Link>
                        </div>
                    }
                    {name ?
                        <div>
                        </div>
                        :
                        <div className={"navigation"}>
                            <Link
                                to="/loginpage"
                                style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                                <p style={{ fontSize: "18px" }}>LOGIN</p>
                            </Link>
                        </div>
                    }
                    <div className={"navigation"}>
                        <Link
                            to="/updateprofile"
                            style={{ textDecoration: "none", color: "rgb(247, 242, 242)" }}>
                            <p style={{ fontSize: "40px" }}>
                                <FaUserCircle /></p>
                        </Link>
                    </div>
                    {/* } */}

                </div>
            </Header>
        </Layout>
    );
}
export default Navbar;






