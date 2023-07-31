import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
  const [teamMember, setTeamMember] = useState([]);
  const location = useParams();
  console.log(location);

  useEffect(() => {
    details();
  }, []);

  const details = async () => {
    try {
      const userDetails = await fetch(
        "https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json"
      );
      const newData = await userDetails.json();
      console.log("new Data ", newData);
      setTeamMember(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTeamMembersByLocation = () => {
    switch (location.id) {
      case "frontend":
        return teamMember.slice(1, 6);
      case "backend":
        return teamMember.slice(8, 13);
      case "designing":
        return teamMember.slice(15, 19);
      case "testing":
        return teamMember.slice(21, 25);
      case "marketing":
        return teamMember.slice(27, 31);
      case "cloud":
        return teamMember.slice(33, 37);
      default:
        return [];
    }
  };

  // Get the details of the first name based on the different cases
  const getFirstNameDetails = () => {
    switch (location.id) {
      case "frontend":
        return teamMember[0];
      case "backend":
        return teamMember[7];
      case "designing":
        return teamMember[14];
      case "testing":
        return teamMember[20];
      case "marketing":
        return teamMember[26];
      case "cloud":
        return teamMember[32];
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {/* Card on the left side */}
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea style={{ backgroundColor: "white" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {getFirstNameDetails()?.username}
                </Typography>
                <Typography sx={{ color: "black" }}>
                  Email: {getFirstNameDetails()?.email}
                </Typography>
                <Typography sx={{ color: "black" }}>
                  Gender: {getFirstNameDetails()?.gender}
                </Typography>
                <Typography sx={{ color: "black" }}>
                  Phone Number: {getFirstNameDetails()?.phones.number}
                </Typography>
                <Typography sx={{ color: "black" }}>
                  Hired On: {getFirstNameDetails()?.hiredOn}
                </Typography>
                <Typography sx={{ color: "black" }}>
                  Date of Birth: {getFirstNameDetails()?.dob}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Accordion on the right side */}
        <Grid item xs={8}>
          <div>
            {getTeamMembersByLocation().map((item) => (
              <div key={item.id}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.username}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                      Email: {item.email}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Gender: {item.gender}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Phone Number: {item.phones.number}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Hired On: {item.hiredOn}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Date of Birth: {item.dob}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TeamDetails;