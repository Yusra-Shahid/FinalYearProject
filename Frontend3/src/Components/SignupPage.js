import React, { useState } from "react";
import { BsPersonFill, BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import "../Css/SignupPage.css";
import { FaPhoneAlt, FaCheck } from "react-icons/fa";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import logo from '../Images/logo.png';
import { Form, Row } from 'react-bootstrap';
import { Alert } from "antd";

function SignupPage() {
  const history = useHistory();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setCPassword] = useState('')
  const [usertype, setUsertype] = useState('')
  const [spe, setSpe] = useState('')


  function handleSubmit(event) {
    event.preventDefault();
   
    if (name.trim() !== '' && email.trim() !== '' && contact.trim() !== '' && password.trim() !== '') {
      if (spe) {
        axios.post('https://imedcare.herokuapp.com/user/new_Doctor', {
          name: name,
          email: email,
          password: password,
          contact: contact,
          userType: usertype,
          specaility: spe,
        })
          .then(function (response) {
            console.log(response);
            history.push("./loginpage");
          })
          .catch(function (error) {

            alert(error)

          })
      }
      else {
        console.log(name)
        //axios.post('http://localhost:5000/user/new_user'

        axios.post('https://imedcare.herokuapp.com/user/new_user', {
          name: name,
          email: email,
          password: password,
          // c_password: c_password,
          contact: contact,
          userType: usertype,
          // age:age,

        })
          .then(function (response) {
            console.log(response);
            history.push("./loginpage");
          })
          .catch(function (error) {

            alert(error)

          })

      }
    }
    else {
      alert('Please fill form completely')
    }
  }

  const options = ["Patient", "Doctor"];
  return (
    <form onSubmit={handleSubmit} className={"loginMainContainer"}>
      <div className={"loginFormContainer"}>

        <div className={"loginBox"}>
          <h1 style={{ color: "#176cbb" }}>Signup</h1>

          <div className={"inputContainer"}>
            <BsPersonFill
              style={{ height: 20, width: 20, color: "#176cbb" }}
            />
            <input
              className={"input"}
              type={"text"}
              placeholder={"Name"}
              required={"true"}
              name={"name"}
              value={name}
              onChange={e => { setName(e.target.value) }}
            />
          </div>
          <div className={"inputContainer"}>
            <BsFillEnvelopeFill
              style={{ height: 20, width: 20, color: "#176cbb" }}
            />
            <input
              className={"input"}
              type={"email"}
              placeholder={"E-mail"}
              name={"email"}
              required={'true'}
              value={email}
              onChange={e => { setEmail(e.target.value) }}
            />
          </div>
          <div className={"inputContainer"}>
            <FaPhoneAlt style={{ height: 20, width: 20, color: "#176cbb" }} />
            <input
              className={"input"}
              type={"text"}
              placeholder={"Enter your Mobile Number"}
              name={"contact"}
              value={contact}
              pattern={"[0-9]{11}"}
              title={"should be 11 numbers, should be like 03xxxxxxxxx"}
              required={'true'}
              prefix={"03"}
              onChange={e => { setContact(e.target.value) }}
            />
            {/* <Input type='text' pattern="(\d).{8,8}" title="should be 11 numbers, should be like 03xxxxxxxxx" name='number'
              required='true'
               placeholder='Enter your Mobile Number' 
               onChange={handleInputs} prefix="03" 
               /><Marginer direction="vertical" margin={20} /> */}

          </div>
          <div className={"inputContainer"}>
            <BsLockFill style={{ height: 20, width: 20, color: "#176cbb" }} />
            <input
              className={"input"}
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              value={password}
              required={'true'}
              onChange={e => { setPassword(e.target.value) }}
            />
          </div>
          <div className={"inputContainer"}>
            <FaCheck style={{ height: 20, width: 20, color: "#176cbb" }} />
            <input
              className={"input"}
              type={"password"}
              pattern={password}
              title={"password not match"}
              placeholder={"Confirm Password"}
              name={"c_password"}
              required={'true'}
              value={c_password}
              onChange={e => { setCPassword(e.target.value) }}
            />
          </div>
          <div className={"signupDropdownBox"}>
            <BsPersonFill
              style={{ height: 20, width: 20, color: "#176cbb" }}
            />
            <Form.Group className="sgn-dropdown-Layout"
              value={usertype}
              required="true"

              onChange={e => setUsertype(e.target.value)}>
              <Form.Control as="select" defaultValue="--Select--"
                className="sgn-dropdown-Layout" placeholder={"Select User Type"}>
                <option className="placeholder-color">--Select User Type--</option>
                <option>doctor</option>
                <option>patient</option>
              </Form.Control>
            </Form.Group>
          </div>
          {usertype == "doctor" && <div className={"inputContainer"}>
            <BsPersonFill
              style={{ height: 20, width: 20, color: "#176cbb" }}
            />
            {/* <input
              className={"input"}
              type={"text"}
              placeholder={"specialist"}
              name={"specialist"}
              value={spe}
              onChange={e => { setSpe(e.target.value) }}
            /> */}
            <Form.Group className="Doc_dropdown-Layout"
              value={spe}
              required="true"

              onChange={e => setSpe(e.target.value)}>
              <Form.Control as="select" defaultValue="--Select--"
                className="Doc_dropdown-Layout"
                required={'true'}
                 placeholder={"Select User Type"}>
                <option className="placeholder-color">--Select User Speciality--</option>
                <option>Psychiatriest</option>
                <option>Dermatogist</option>
                <option>Chest Specialist</option>
                <option>Gynaecologiest</option>
                <option>Orthologist</option>
              </Form.Control>
            </Form.Group>
          </div>
          }
          <button className={"loginButton"}>Signup</button>
        </div>


        <div className={"loginImage"}>
          <div
            className={"logoImage"}>
            <img src="https://i.pinimg.com/originals/60/a6/24/60a6248d5c2ae495cb8ce2c15f6f0ec2.png" width={450} />
          </div>
        </div>
      </div>

    </form>
  );
}
export default SignupPage;
