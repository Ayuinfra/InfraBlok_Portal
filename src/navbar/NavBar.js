
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png.jpg';
import infrablok from "../assets/infrablok.jpg"
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
                <div style={{ backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"})`, width: 1345, height: 700, marginTop: '0px' }}>
                    <h1 style={{ color: "red" }}>InfraBlok Portal</h1>
                    <p style={{ color: "white", fontSize: "20px" }}>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                        {/* t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose  */}
                        {/* t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose  */}
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    </p>

                    <button>Our Teams</button>
                </div>
            </>
        </>

    );
};

export default Navbar;