import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from 'antd';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Doctor name
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Appointment date that was done </Typography>
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