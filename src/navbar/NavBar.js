import React from 'react';
import { Toolbar, Typography, Button, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg.jpg'


const Navbar = () => {

    return (
        <>
            <AppBar position='static'>
                <Toolbar style={{ backgroundColor: "#6D95F7", height: "10px" }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} >
                        <img src={Logo} alt="InfraBlok India Pvt. Ltd" style={{ width: 30, height: 30 }} />
                    </Typography>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} >
                        <p style={{ color: "white" }}>InfraBlok Portal</p>
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/team">
                        Our Teams
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );

};

export default Navbar;