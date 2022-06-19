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
import { Link } from "react-router-dom";

const ViewPatients = () => {
  const name = localStorage.getItem('p_name')
  console.log(name);
  const [data, setData] = useState('');
  // useEffect(async() => {
  //   await axios.get(`http://localhost:5000/request/getrequest/${name}`)
  //     .then((Response) => {
  //       setData(Response.data)
  //       console.log(Response.data)
  //       if (Response.data.length === 0) {
  //         alert("No REcord Found");
  //         // history.push("/");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, []);

  const [Appointment, setAppointment] = useState([])

  useEffect(async () => {

    await axios.post('https://imedcare.herokuapp.com/request/dappp', {

      email: localStorage.getItem("email"),

    }).then(function (response) {
      setAppointment(response.data);
      console.log(response.data)

    })

    //     .then(res => res.json()
    //     // console.log(res)
    //   )
    //   .then(result => setMessegee(result))

    //   .catch(error => console.log('error', error));

    await console.log(Appointment)


  }, 10000000)




  console.log(data);
  return (

    <>
      <Navbar />
      <div className="Viewsection"></div>

      <div className="view_patient">
        {/* <div className="viewleftside">
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
        </div> */}

        <div className="viewrightpatient">
          <div className="viewrightside">
            {Appointment.map((data) => (<>

              {data.status === "pending" && <>
                <div className="viewcard">

                  <div className="viewPatientName">
                    <h12> Patient Name : {data.patient}</h12>
                    <p>appointment date :  {data.Date}<br></br>
                      appointment timing : {data.Time}<br></br>
                      Your Calling ID:{data.appointID}</p>
                  </div>
                  <br />
                  <Button className="contained">
                    <a href="https://yusra-shahid.github.io/IMedCarevideoCall/" style={{ color: "#176cbb", backgroundColor: "whitesmoke", marginLeft:"10px",width:"180px",height:"30px",borderRadius:"5px"}}>Call Patient</a>
                  </Button>


                  <Button variant="contained" onClick={async () => {
                    axios.post('https://imedcare.herokuapp.com/request/appdone', { id: data._id }).then((acc) => {
                      console.log(acc);

                    })

                    await axios.post('https://imedcare.herokuapp.com/request/dappp', {

                      email: localStorage.getItem("email"),

                    }).then(function (response) {
                      setAppointment(response.data);
                      console.log(response.data)

                    })

                    //     .then(res => res.json()
                    //     // console.log(res)
                    //   )
                    //   .then(result => setMessegee(result))

                    //   .catch(error => console.log('error', error));

                    await console.log(Appointment)
                  }}>    appointment done</Button>
                  {/* <div className="viewcross">
                  <AiOutlineCloseCircle onClick
                    style={{ height: 40, width: 40, color: "red" }} />
                </div> */}

                </div>
              </>}

            </>))}
          </div>


          <div className="viewrightside">
            {Appointment.map((data) => (<>

              {data.status === "done" && <>
                <div className="viewcard">

                  <div className="viewPatientName">
                    <h12> Patient Name : {data.patient}</h12>
                    <p>appointment date :  {data.Date}<br></br>
                      appointment timing : {data.Time}<br></br>
                    </p>
                  </div>




                </div>
              </>}

            </>))}
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
export default ViewPatients;
