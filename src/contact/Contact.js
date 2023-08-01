import React from "react";
import { CardContent, Grid, Typography } from "@mui/material";

const Contact = ({ icon, data, backgroundColor }) => {

  return (
    <Grid item xs={6} md={6} lg={3}>
      <CardContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >

          {icon && (
            <icon.type fontSize="large" style={{ marginBottom: "10px" }} />
          )}

          <div
            style={{
              backgroundColor: backgroundColor,
              padding: "10px",
              borderRadius: "10px",
              height:"100px",
              width:"90%",
              boxShadow:"10px  10px 10px grey",
            }}
          >
            <Typography variant="body1" align="center">
              {data}
            </Typography>
          </div>
        </Grid>
      </CardContent>
    </Grid>
  );
};

export default Contact;