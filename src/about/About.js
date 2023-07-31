import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import aboutback from "../assets/aboutback.jpg"

const About = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 ,backgroundImage:`url(${aboutback})`, padding:"20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* <img src={require("../assets/backend.jpg")} alt ="backend"style={{borderRadius:10,marginTop:20,marginLeft:10,width:"30vw"}}/> */}
            <img src={require("../assets/img.jpg")} alt ="backend"style={{borderRadius:10,marginTop:20,marginLeft:10,width:"30vw", height :"80vh"}}/>
        
          </Grid>
          <Grid item xs={8}>
            <h2 style={{color:'white'}}>InfraBlok India Pvt Ltd</h2>
            <p style={{color:'white'}}>
              Infrablok is the preferred partner for many of the world's leading
              enterprises, SMEs, and technology startups. We specialize in
              delivering innovative solutions that solve enterprise problems
              with cutting-edge technologies, like Web 3, Artificial
              Intelligence, Full-stack development, and DevOps. We render
              customized and robust business-centric services to meet the unique
              needs of our clientsInfrablok builds futuristic digital solutions
              for tech-savvy enterprises and startups. Our development team
              helps businesses build secure and scalable solutions in AI/ML and
              Web3. We provide Web3 APIs that can help connect existing Web2
              solutions to Web3. We build our products to meet the needs of your
              application with a focus on design and functionality. We also
              provide tailor–made digital solutions to design any product as per
              your specific requirements. Our engineering team has delivered
              digital solutions to numerous industry verticals worldwide with
              emerging technologies.
            </p>
          
           <h4 style={{color:'white'}}>Email :  https://infrablok.com/</h4> 
            {/* <p style={{color:'white'}}> </p> */}
            <h4 style={{color:'white'}}>CTO : Sumit Wadhwa</h4> 
            {/* <p style={{color:'white'}}>Sahil Thakkar , Vijay Kumar</p> */}
            <h4 style={{color:'white'}}>Date of Incorporation : 30 August 2022 </h4>
            {/* <p style={{color:'white'}}></p> */}
            <h4 style={{color:'white'}} >Contact : 7684554536 , 9465734780</h4>
            {/* <p style={{color:'white'}}>7684554536 , 9465734780</p> */}
            <h4 style={{color:'white'}}>Address :  401, Tower B, Ithum Tower IT Park, Sec 62, Noida Gautam Buddha Nagar UP 201301 IN</h4>
            {/* <p style={{color:'white'}}></p> */}

          </Grid>
          
        </Grid>
      </Box>
    </>
  );
};

export default About;

