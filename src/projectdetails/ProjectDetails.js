import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import kalibra from "../assets/kalli.png"
import mdverse from "../assets/md.jpg"
import trackandtrace from "../assets/track.png"

 
const Project = () => {
  const ProjectData = [
    {
      heading: "Track & Trace",
      description: "With Track & Trace checking a product’s journey is as easy as scanning a QR code. It records all touchpoints of a product from origin to destination using Web3 app.",
      image: trackandtrace,
      id: "trackTrace",
      title :"Trace and Trace"
    },

    {
        heading: "Kalibra",
        description: "Kalibra is a platform for personalised health  delivering data-guided insights and real-time actions to improve our healthspan. Using our A.I. algorithms to organise your health data.",
        image: kalibra,
        id: "kalibra",
        title:"Kalibra"

      },

      {

        heading: "MDVerse",
        description: "MDVerse drives personalized, precision therapies just-in-time Pairing next generation software, analytics, and generative AI with next generation tailor-made therapeutics",
        image: mdverse,
        id: "MDVerse",
        title:'MDVerse'
      },
  ];

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        style={{marginTop:"100px",paddingLeft:50}}
      >
        {ProjectData.map((item) => (
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                boxShadow:"10px 20px 30px #887ecb"
              }}

            >
              <CardMedia
                sx={{ height: 10 ,width:"100%",}}
                image={item.image}
                title={item.title}
                width={"20px"}
                className="card-image"
                style={{height:'30vh',justifyContent:"center",alignItems:"center",backgroundPosition:"center"}}
              />

              <CardContent style={{backgroundColor:"#887ecb",alignItems:"center",justifyContent:"center"}} >
                <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold"}}>
                  {item.heading}
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{color:'white',justifyContent:'center',alignItems:'center'}}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Project;