import React from "react";
import { useState, useEffect } from "react";
import Navbar from './navbar';
import axios from "axios"
import Button from '@mui/material/Button';
import "../Css/ViewPatients.css";
import Footer from './footer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const ViewPatients = () => {
  const name = localStorage.getItem('p_name')
  console.log(name);
  const [data, setData] = useState('');
  useEffect(async() => {
    await axios.get(`http://localhost:5000/request/getrequest/${name}`)
      .then((Response) => {
        setData(Response.data)
        console.log(Response.data)
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
      <div className="Viewsection"></div>

      <div className="view_patient">
        <div className="viewleftside">
          <div className="viewDays">
            <div className="viewWeekofday">
              <p> Days of Week</p>
            </div>
            <RadioGroup>
              <FormControlLabel value="Monday" control={<Radio />} label="Morning" />
              <FormControlLabel value="Tuesday" control={<Radio />} label="afternoon" />
              <FormControlLabel value="Wednesday" control={<Radio />} label="evening" />
             
            </RadioGroup>

          </div>
        </div>

        <div className="viewrightpatient">
          <div className="viewrightside">
            {/* {data.map((data) => ( */}
              <div className="viewcard">

                <div className="viewPatientName">
                  <h12> Patient Name : bht bimar{data.patient}</h12>
                  <p>appointment timing : 4/12/23 {data.Time}</p>
                </div>
                <Button className="contained">Call Patient</Button>
                <Button variant="contained">appointment done</Button>
                {/* <div className="viewcross">
                  <AiOutlineCloseCircle onClick
                    style={{ height: 40, width: 40, color: "red" }} />
                </div> */}

              </div>
            {/* <div className="viewcard"></div>
            <div className="viewcard"></div>
            <div className="viewcard"></div>
            <div className="viewcard"></div> */}
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
export default ViewPatients;
