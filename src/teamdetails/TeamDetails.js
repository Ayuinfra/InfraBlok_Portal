import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import TeamCard from "./TeamCard";
import TeamAccordion from "./TeamAccordion";

const TeamDetails = () => {
  const [teamMember, setTeamMember] = useState([]);
  const location = useParams();

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
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TeamCard memberDetails={getFirstNameDetails()} />
      </Grid>

      <Grid item xs={12} sm={6} md={8} lg={9}>
        <TeamAccordion teamMembers={getTeamMembersByLocation()} />
      </Grid>
    </Grid>
  );
};

export default TeamDetails;
