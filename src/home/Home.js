
import React from "react";
import image from "../assets/frots.png"


const Home = () => {
  return (
    <>
      <>
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${image})`,
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding:0,
            margin:0,
            display:'flex',
            justifyContent:"center",
            alignItems:'center',
          }}
        >
         <div style={{marginLeft:'10',display:'block',textAlign:'center'}}>
          <p style={{fontSize:"50px",fontWeight:"bold"}}>Powering the Digital World with </p>
          <p style={{fontSize:"50px",fontWeight:"bold"}}>AI ,ML and Web3</p>
          <p style={{fontFamily:"cursive"}}>
            Leverage Infrablok's Web 3 services that combine AI/ML with blockchain to create
          </p>
          <p style={{fontFamily:"cursive"}}> more secure and efficient systems</p>
         </div>
        </div>
      </>
    </>
  );
};

export default Home;