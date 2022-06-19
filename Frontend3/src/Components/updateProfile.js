import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link,useHistory} from 'react-router-dom';
import {BsPersonFill, BsFillEnvelopeFill, BsLockFill} from "react-icons/bs";
import {Form, Row} from 'react-bootstrap';
import '../Css/updateProfile.css';
import { FaPhoneAlt, FaCheck } from "react-icons/fa";
import axios from 'axios';
import { message } from 'antd';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '530px',
    width: '800px'

  },
}));

export default function UpdateProfile() {

const history = useHistory();
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [contact, setContact] = useState('')  
const [password, setPassword] = useState('')
const [usertype, setUsertype] = useState('')
const [oldpassword, setOldpassword] = useState('')
const [data, setData] = useState('')
const token = sessionStorage.getItem('token');
useEffect(() => {
    axios.get(`https://blood-backend.herokuapp.com/api/users/getUser`,
    { headers: { "x-auth-token": `${token}` }})
        .then((Response) => {
            setData(Response.data)
            console.log(Response)
        })
        .catch((error) => {
            console.log(error.response)
        })
}, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(password,name,email,contact,usertype,data.name)
    axios.put('https://blood-backend.herokuapp.com/api/users/updateUser', {
      oldpassword:oldpassword,
      name: name || data.name,
      email: email || data.email, 
      contact: contact || data.contact,
      password: password || data.password,
      userType: usertype || data.userType
      
  },{ headers: { "x-auth-token": `${token}` }})
  .then(function (response) {
    console.log('access')
      console.log(response.data);
      if(response.data !== "Password Not Match")
      {
        sessionStorage.removeItem('name');
      sessionStorage.removeItem('email');
      message.success("Updated")
      sessionStorage.setItem('name',response.data.name);
      sessionStorage.setItem('email',response.data.email);
      window.location.reload(true);
      }
      else
      {
        message.error("oldPassword is Not Macth")
      }
      

      //history.push('/')
  })
  .catch(function (error) {console.log(error)});             
  }

  return (
    <div>
    <Link style={{color:"darkred"}} onClick={handleOpen}>
        Update Profile
      </Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className ="upd-heading-signup">Update your Profile</h2>
                <form className="upd-mainContainer" method="POST" onSubmit={handleSubmit}>
                    <div className={"upd-inputContainer"}>
                        <BsPersonFill
                        style={{ height: 20, width: 20, color: "darkred" }}
                        />
                        <input
                        required="true"
                        className={"upd-input"}
                        type={"text"}
                        placeholder={"Name"}
                        // value={name}
                        defaultValue={data.name}

                        onChange={e => {setName(e.target.value)}}
                        />
                    </div>
                    <div className={"upd-inputContainer"}>
                        <BsFillEnvelopeFill
                        style={{ height: 20, width: 20, color: "darkred" }}
                        />
                        <input
                        required="true"
                        type="email"
                        className={"upd-input"}
                        // type={"text"}
                        placeholder={"E-mail"}
                        name={"email"}
                        defaultValue={data.email}
                        onChange={e => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className={"upd-inputContainer"}>
                        <FaPhoneAlt style={{ height: 20, width: 20, color: "darkred" }} />
                        <input
                         type={"tel"}
                         pattern="[0-9]{11}"
                         title="Format should be (03XXXXXXXXX) OR Enter Complete number"
                        className={"upd-input"}
                        required="true"
                        placeholder={"Contact"}
                        name={"contact"}
                        defaultValue={data.contact}
                        onChange={e => {setContact(e.target.value)}}
                        />
                    </div>
                    
                    <div className={"upd-inputContainer"}>
                        <BsLockFill style={{ height: 20, width: 20, color: "darkred" }} />
                        <input
                        className={"upd-input"}
                      
                        placeholder={"Old Password"}
                        name={"oldpassword"}
                        type={"password"}
                          required="true"
                          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                          // title="Password Not match With Old Password"
                        //pattern={data.password} 
                            
                        //defaultValue={password}
                        onChange={e => {setOldpassword(e.target.value)}}
                        />
                    </div>
                    <div className={"upd-inputContainer"}>
                        <BsLockFill style={{ height: 20, width: 20, color: "darkred" }} />
                        <input
                        className={"upd-input"}
                        placeholder={"New Password"}
                        name={"new_password"}
                        type={"password"}
                          //required="true"
                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                         title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        // pattern={password} 
                            
                        defaultValue={password}
                        onChange={e => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className={"upd-inputContainer"}>
                        <FaCheck style={{ height: 20, width: 20, color: "darkred" }} />
                        <input
                         
                        className={"upd-input"}
                        type={"password"}
                        placeholder={"Confirm New Password"}
                        name={"c_password"}
                        pattern={password} 
                        title="Password Not match with New password"
                        
                        //defaultValue={password}
                        //onChange={e => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className={"upd-signupDropdownBox"}>
                        <BsPersonFill
                        style={{ height: 20, width: 20, color: "darkred" }}
                        />
                        {/**React Bootstrap Dropdoen */}
                    <Form.Group className="upd-dropdown-Layout"
                      defaultValue={data.userType}
                            onChange={e =>setUsertype(e.target.value)}>
                                <Form.Control as="select" defaultValue={data.userType}
                                className="upd-dropdown-Layout" placeholder={"Select User Type"}>
                                <option className="placeholder-color">--Select User Type--</option>
                                <option>User</option>
                                <option>Blood Bank</option>
                                </Form.Control>
                        </Form.Group>
                    </div>
                        <button className={"upd-signupButton"} >Update</button>
                </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
