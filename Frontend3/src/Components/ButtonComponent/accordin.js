import React, { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from 'antd';
import axios from 'axios';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [Appointment, setAppointment] = useState([])
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  useEffect(async () => {

    axios.post('https://imedcare.herokuapp.com/request/appp', {

        email: localStorage.getItem("email"),

    }).then(function (response) {
        setAppointment(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);


    })

    //     .then(res => res.json()
    //     // console.log(res)
    //   )
    //   .then(result => setMessegee(result))

    //   .catch(error => console.log('error', error));

    console.log(Appointment)


}, 10000000)


  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Doctor name:
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>manish</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            doctor email:
           yusrashahid2019@gmail
            <Button
            variant="contained"
            component="label"
          >
            download File
            <input
              type="file"
              hidden
            />
          </Button>
          </Typography>
          <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:'10%' }}>
            Appointment Time: 3:45
          </Typography>
          <Typography sx={{ width: '45%', flexShrink: 0 ,marginLeft:'10%'}}>
            Appointment Date: 3-6-2022
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}> Doctor name:DR.john</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Appointment date that was done
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          doctor email:
            prescription in document form that can be open
            <Button
            variant="contained"
            component="label"
          >
             download File
            <input
              type="file"
              hidden
            />
          </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Doctor name:Dr.Ali
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          prescription in document form that can be open
      
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            your prescription
          <Button
            variant="contained"
            component="label"
          >
           download File
            <input
              type="file"
              hidden
            />
          </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', color:'blue' ,flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}