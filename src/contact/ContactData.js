import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const ContactData = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="70vh" 
    >
      <Grid item>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              CTO: Sumit Wadhwa
            </Typography>
            <Typography gutterBottom>
              Email: info@infrablok.com
            </Typography>
            <Typography gutterBottom>
              Contact: 7684554536, 9465734780
            </Typography>
            <Typography>
              Address: 401, Tower B, Ithum Tower IT Park, Sec 62, Noida Gautam Buddha Nagar UP 201301 IN
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactData;
