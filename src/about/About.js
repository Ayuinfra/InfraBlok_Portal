import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const About = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={require("../assets/img.jpg")}
              alt="backend"
              style={{
                borderRadius: 10,
                marginTop: 20,
                marginLeft: 10,
                width: "30vw",
                height: "80vh",
                boxShadow: "10px 20px 30px #066af4",
              }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "cursive",
            }}

          >
            <h2
              style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}
            >
              <span style={{ color: "blue" }}>InfraBlok</span>
            </h2>
            <p
              style={{
                color: "black",
                fontFamily: "san-serif",
                fontSize: "23px",
                textShadow: "5px 5px 5px #d1eff2",
              }}

            >
              Infrablok is the preferred partner for many of the world's leading
              enterprises, SMEs, and technology startups.We specialize in
              delivering innovative solutions that solve enterprise problems
              with cutting-edge technologies, like <span style={{ color: "blue" }}>Web3, Artificial
                Intelligence, Full-stack development, and DevOps.</span>
            </p>
            <p
              style={{
                color: "black",
                fontFamily: "san-serif",
                fontSize: "23px",
                textShadow: "5px 5px 5px #d1eff2",
              }}
            >
              We render customized and robust business-centric services to meet
              the unique needs of our clientsInfrablok builds futuristic digital
              solutions for tech-savvy enterprises and startups. Our development
              team helps businesses build secure and scalable solutions in AI/ML
              and Web3.
            </p>{" "}
            <p
              style={{
                color: "black",
                fontFamily: "san-serif",
                fontSize: "23px",
                textShadow: "5px 5px 5px #d1eff2",
              }}

            >
              We provide Web3 APIs that can help connect existing Web2 solutions
              to Web3. We build our products to meet the needs of your
              application with a focus on design and functionality. We also
              provide tailor–made digital solutions to design any product as per
              your specific requirements. Our engineering team has delivered
              digital solutions to numerous industry verticals worldwide with
              emerging technologies.
            </p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;