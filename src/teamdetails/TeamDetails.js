import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardActionArea } from "@mui/material";
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
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      {/* Card in the center */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {/* Increase the card width */}
        <Card sx={{ maxWidth: "100%", width: 800 }}>
          <CardActionArea style={{ backgroundColor: "#8FBC8F" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {/* Add Avatar component here */}
              <Avatar
                alt={getFirstNameDetails()?.username}
                src={getFirstNameDetails()?.avatarUrl}
                sx={{ width: 100, height: 90 }}
              />
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

      <Grid item xs={12} sm={6} md={8} lg={9}>
        {/* Increase the accordion width */}
        <div>
          {getTeamMembersByLocation().map((item) => (
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
      </Grid>
    </Grid>
  );
};

export default TeamDetails;