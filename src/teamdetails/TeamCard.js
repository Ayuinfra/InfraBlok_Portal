import React from "react";
import { Avatar, Card, CardActionArea, CardContent, Typography } from "@mui/material";

const TeamCard = ({ memberDetails }) => {
  return (
    <Card sx={{ minWidth: 310 ,backgroundColor:"grey" }} >
        <CardContent
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            alt={memberDetails?.username}
            src={memberDetails?.avatarUrl}
            sx={{ width: 100, height: 90 }}
          />
          <Typography gutterBottom variant="h6" component="div">
            {memberDetails?.username}
          </Typography>
          <Typography sx={{ color: "black" }}>
            Email: {memberDetails?.email}
          </Typography>
          <Typography sx={{ color: "black" }}>
            Gender: {memberDetails?.gender}
          </Typography>
          <Typography sx={{ color: "black" }}>
            Phone Number: {memberDetails?.phones.number}
          </Typography>
          <Typography sx={{ color: "black" }}>
            Hired On: {memberDetails?.hiredOn}
          </Typography>
          <Typography sx={{ color: "black" }}>
            Date of Birth: {memberDetails?.dob}
          </Typography>
        </CardContent>
  
    </Card>
  );
};

export default TeamCard;
