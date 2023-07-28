
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg.jpg';

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:"#6D95F7"}}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} >
                        <img src={Logo} alt="InfraBlok India Pvt. Ltd" style={{ width: 30, height: 30 }} />

                    </Typography>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} >
                        <h4 style={{ color: "white" }}>InfraBlok Portal</h4>

                    </Typography>

                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contact Us
                    </Button>
                </Toolbar>
            </AppBar>
            <>

                {/* <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'} width={1500} height={600}/> */}
               
            </>
        </>

    );
};

export default Navbar;