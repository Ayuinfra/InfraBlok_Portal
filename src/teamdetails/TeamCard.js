import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

 
const TeamCard = ({ memberDetails }) => {
  return (
    <Card sx={{ minWidth: 300,boxShadow:'10px 20px 30px grey' }}>
      <CardContent
        sx={{
          flexDirection: "column",
          backgroundColor:"#c1dced"
        }}
      >
        <div className="avatar-form">
        <Avatar
          alt={memberDetails?.username}
          src={memberDetails?.avatarUrl}
          sx={{ width:100,height:90}}
        />
        </div>
       
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

 




 

 

 

 

 