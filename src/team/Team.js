import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import frontend from "../assets/frontend.png";
import Backend from "../assets/backend.jpg";
import designing from "../assets/designing.png";
import testing from "../assets/testing.png";
import marketing from "../assets/marketing.png";
import cloud from "../assets/cloud.png";
import { Link } from "react-router-dom";


const Team = () => {
  const teamsData = [
    {
      heading: " Frontend Team",
      description:
        " A front-end developer is typically only one player on a team  that designs and develops web sites, web applications, or native  applications running from web technologies.",
      image: frontend,
      id: "frontend",
    },
    {
      heading: " Backend Team",
      description:
        "Backend is the server-side logic that powers the websites and apps, not accessible to the user but ensures that everything on the client-side website is operating smoothly.",
      image: Backend,
      id: "backend",
    },

    {
      heading: " Designing Team",
      description:
        "    Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.   ",
      image: designing,
      id: "designing",
    },

    {
      heading: " Testing Team",
      description:
        "  Testing is the process of evaluating and verifying that a   software product or application does what it is supposed to do.  The benefits of testing include preventing bugs, reducing development costs and improving performance    ",
      image: testing,
      id: "testing",

    },


    {

      heading: "Marketing Team",
      description:
        "    Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging  offerings that have value for customers, clients, partners, and society at large   ",
      image: marketing,
      id: "marketing",

    },

    {
      heading: " Cloud Team",
      description:
        "  cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics,  and intelligence—over the Internet (“the cloud”) to offer faster innovation.      ",
image: cloud,
      id: "cloud",
    },
  ];

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        style={{ paddingLeft: 50, paddingTop:'50px',paddingBottom:'30px' }}
      >
        {teamsData.map((item) => (
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                boxShadow:"10px 20px 30px grey"

              }}

            >
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="green iguana"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={`/teamdetails/${item.id}`}
                >
                  Team Members
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Team;