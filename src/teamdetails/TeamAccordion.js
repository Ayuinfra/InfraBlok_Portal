import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TeamAccordion = ({ teamMembers }) => {
  return (
    <div>
      {teamMembers.map((item) => (
        <div key={item.id}>
          <Accordion
            sx={{
              maxWidth: "100%",
              width: 800,
              backgroundColor: "#f0f0f0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                backgroundColor: "#a0a0a0",
              }}
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {item.username}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#e0e0e0",
                color: "#000000",
              }}
            >
              <Typography sx={{ color: "#000000" }}>
                Email: {item.email}
              </Typography>
              <Typography sx={{ color: "#000000" }}>
                Gender: {item.gender}
              </Typography>
              <Typography sx={{ color: "#000000" }}>
                Phone Number: {item.phones.number}
              </Typography>
              <Typography sx={{ color: "#000000" }}>
                Hired On: {item.hiredOn}
              </Typography>
              <Typography sx={{ color: "#000000" }}>
                Date of Birth: {item.dob}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default TeamAccordion;
