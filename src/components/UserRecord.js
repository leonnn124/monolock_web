import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const UserRecord = (props) => {
  return (
    <div>
      {props.records.userId ? (
        <Box
          sx={{
            marginBottom: '16px',
            border: '1px solid #363F4E',
            boxShadow: 'none',
            borderRadius: '4px',
          }}
        >
          <AccordionSummary sx={{ height: 64 }}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {props.records.userId}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              於 2023/1/1 開啟
            </Typography>
          </AccordionSummary>
        </Box>
      ) : (
        <></>
      )}

      <div className="recordBox">
        <Accordion
          sx={{
            border: '1px solid #363F4E',
            boxShadow: 'none',
            borderRadius: '4px',
          }}
        >
          <AccordionSummary
            sx={{ height: 64 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              管理員 - LEON
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              於 2023/1/1 開啟
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              border: '1px solid black',
              borderRadius: '4px',
              margin: 2,
            }}
          >
            <Typography>違規</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default UserRecord;
