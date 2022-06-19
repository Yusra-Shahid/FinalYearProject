import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import "../Css/LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import logo from '../Images/logo.png';
import Password from "antd/lib/input/Password";
import Navbar from './navbar';
import axios from 'axios';
import { message } from 'antd';


function LoginPage() {

  const [email, setEmail] = useState('');
  const [OPT, setOTP] = useState('');
  const [emailforotp, setEmailforotp] = useState('');
  const [password, setPasword] = useState('');
  const [fpassword, setfPasword] = useState('');
  const [fcpassword, setfcPasword] = useState('');
  const [login, setlogin] = useState(true);
  const [forgetpassword, setforgetpassword] = useState(false);
  const [forgetpasswordemail, setforgetpasswordemail] = useState(false);
  const [forgetpasswordotp, setforgetpasswordotp] = useState(false);
  const [forgetpasswordchange, setforgetpasswordchange] = useState(false);
  const history = useHistory();


  function submit(event) {
    console.log(email, password)
    if (email.trim() !== '' && password.trim() !== '') {

      axios.post('https://imedcare.herokuapp.com/user/login', {
        email: email,
        password: password,
      })
        .then(function (response) {
          console.log(response);
          if (response.data !== "Wrong Password") {
            console.log(response.data)
            localStorage.setItem('UserType', response.data.userType)
            localStorage.setItem('p_name', response.data.name)
            localStorage.setItem('email', email)

            // history.push("/");
            if (response.data.userType === "patient") {
              if (email === "imed.care22@gmail.com") {
                history.push("/Admin")
              }
              else {
                message.success('WELCOME ' + response.data.name);
                history.push("/Viewdept")
              }
            }
            if (response.data.userType === "doctor") {
              history.push("/dprofile")

            }
          }
          else {
            message.error("you enter Wrong password")
          }

        })
        .catch(function (error) {

          alert("user NOT Found");
          history.push("/signuppage");

        })
    }
    // history.push()
  }

  return (
    <div>
      <navbar />

      <div className={"loginMainContainer"}>

        <div className={"loginFormContainer"}>
          <div className={"loginForm"}>
            <h1 style={{ color: "#176cbb" }}>Login</h1>


            {login === true && <>
              <div className={"inputContainer"}>
                <BsFillEnvelopeFill
                  style={{ height: 20, width: 20, color: "#176cbb" }}
                />
                <input
                  className={"input"}
                  type={"email"}
                  placeholder={"Email"}
                  name={"email"}
                  value={email}
                  required={"true"}

                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className={"inputContainer1"}>
                <BsLockFill style={{ height: 20, width: 20, color: "#176cbb" }} />
                <input
                  className={"input1"}
                  type={"password"}
                  placeholder={"Password"}
                  name={"password"}
                  required={"true"}
                  value={password}
                  onChange={e => setPasword(e.target.value)}
                />
              </div>

              <div className={"forgetPassword"}>
                <Link style={{ fontStyle: "italic" }} onClick={() => {
                  setlogin(false)
                  setforgetpassword(true)
                }}>Forget Password?</Link>
              </div>

              <button className={"loginButton"} type="submit" onClick={submit}>
                Login
              </button>

              <div className={"newUser"}>
                <p style={{ fontStyle: "italic" }}>Don't have an account? </p>
                <Link
                  to="/signuppage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p className={"signup"}>Sign Up</p>
                </Link>
              </div>

            </>}
            {/* for the new password */}
            {forgetpassword === true && <>

              <div className={"inputContainer"}>
                <BsFillEnvelopeFill
                  style={{ height: 20, width: 20, color: "#176cbb" }}
                />
                <input
                  className={"input"}
                  type={"text"}
                  placeholder={"please enter your Email for OTP"}
                  name={"email"}
                  value={emailforotp}
                  onChange={e => setEmailforotp(e.target.value)}
                />
              </div>

              <button className={"loginButton"}
                // type="submit"
                onClick={(e) => {



                  axios.post('https://imedcare.herokuapp.com/user/forgetpassword', {
                    email: emailforotp,

                  })
                    .then(function (response) {
                      console.log(response.data)
                      if (response.data === "Request Done") {
                        alert("otp has been sent")
                        setforgetpassword(false)
                        setforgetpasswordemail(true)


                      } else {
                        alert("user not found")
                        setforgetpassword(false)
                        setlogin(true)
                      }
                    })



                }
                }
              >
                sent OTP
              </button>



            </>}
            {/* Enter otp */}
            {forgetpasswordemail === true && <>

              <div className={"inputContainer"}>
                <BsFillEnvelopeFill
                  style={{ height: 20, width: 20, color: "#176cbb" }}
                />
                <input
                  className={"input"}
                  type={"text"}
                  placeholder={"please enter OPT that has been sent on your email"}
                  name={"email"}
                  value={OPT}
                  onChange={e => setOTP(e.target.value)}
                />
              </div>

              <button className={"loginButton"}
                // type="submit"
                onClick={(e) => {



                  axios.post('https://imedcare.herokuapp.com/user/forgetpasswordotp', {
                    otp: OPT,
                    email: emailforotp

                  })
                    .then(function (response) {
                      console.log(response.data)
                      if (response.data === "Request Done") {

                        setforgetpasswordemail(false)
                        setforgetpasswordotp(true)


                      } else {
                        alert("wrong OTP")
                        setforgetpasswordemail(false)
                        setlogin(true)
                      }
                    })



                }
                }
              >
                submit
              </button>

            </>}
            {/*  the new password*/}
            {forgetpasswordotp === true && <>

              <div className={"inputContainer1"}>
                <BsLockFill style={{ height: 20, width: 20, color: "#176cbb" }} />
                <input
                  className={"input1"}
                  type={"password"}
                  placeholder={"enter your new Password"}
                  // name={"password"}
                  value={fpassword}
                  onChange={e => setfPasword(e.target.value)}
                />
              </div>
              <div style={{ margin: "5px" }}></div>
              <div className={"inputContainer1"}>
                <BsLockFill style={{ height: 20, width: 20, color: "#176cbb" }} />
                <input
                  className={"input1"}
                  type={"password"}
                  placeholder={"confirm Password"}
                  // name={"password"}
                  value={fcpassword}
                  onChange={e => setfcPasword(e.target.value)}
                />
              </div>
              <div style={{ margin: "5px" }}></div>

              <button className={"loginButton"}
                // type="submit"
                onClick={(e) => {

                  if (fpassword === fcpassword) {


                    axios.post('https://imedcare.herokuapp.com/user/forgetpasswordchange', {
                      password: fcpassword,
                      email: emailforotp

                    })
                      .then(function (response) {
                        console.log(response.data)
                        if (response.data === "Request Done") {
                          alert("Password has been changed")
                          setforgetpasswordotp(false)
                          setlogin(true)


                        } else {
                          alert("something wrong")
                          setforgetpasswordotp(false)
                          setlogin(true)
                        }
                      })

                  } else { alert("confirm password is wrong") }

                }
                }
              >
                submit
              </button>

            </>}



          </div>
          <div className={"loginImage"}>
            <div
              className={"logoImage"}>
              <img src="https://www.yuvaacademy.in/assets/images/login.png" width={400} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default LoginPage;
