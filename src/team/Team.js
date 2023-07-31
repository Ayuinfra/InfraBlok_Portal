import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import frontend from "../assets/frontend.png";
import Backend from "../assets/backend.png";
import designing from "../assets/designing.png";
import testing from "../assets/testing.png";
import marketing from "../assets/marketing.png";
import cloud from "../assets/cloud.png";
import { Link } from "react-router-dom";

const Team = () => {

  return (
    <>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        style={{ marginLeft: 2 }}
      >
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={frontend}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Frontend Team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A front-end developer is typically only one player on a team
                that designs and develops web sites, web applications, or native
                applications running from web technologies.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/teamDetails/frontend`}>
                <Button size="small">Team Members</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={Backend}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Backend Team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Backend is the server-side logic that powers the websites and
                apps, not accessible to the user but ensures that everything on
                the client-side website is operating smoothly.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/teamDetails/backend`}>
                <Button size="small">Team Members</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={designing}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Designing Team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web designing is the process of planning, conceptualizing, and
                implementing the plan for designing a website in a way that is
                functional and offers a good user experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/teamDetails/design`}>
                <Button size="small">Team Members</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={testing}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Testing Team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Testing is the process of evaluating and verifying that a
                software product or application does what it is supposed to do.
                The benefits of testing include preventing bugs, reducing
                development costs and improving performance
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/teamDetails/testing`}>
                <Button size="small">Team Members</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={marketing}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Marketing Team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Marketing is the activity, set of institutions, and processes
                for creating, communicating, delivering, and exchanging
                offerings that have value for customers, clients, partners, and
                society at large
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/teamDetails/marketing`}>
                <Button size="small">Team Members</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={cloud}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cloud Team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                cloud computing is the delivery of computing services—including
                servers, storage, databases, networking, software, analytics,
                and intelligence—over the Internet (“the cloud”) to offer faster
                innovation.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/teamDetails/cloud`}>
                <Button size="small">Team Members</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

    </>

  );

};

export default Team;

