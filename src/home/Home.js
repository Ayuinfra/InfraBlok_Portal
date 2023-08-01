import { Link, Outlet } from "react-router-dom";
import React from "react";
import img1 from "../assets/1home.jpg"
import img2 from "../assets/2home.jpg"
import img3 from "../assets/3home.webp"
import img4 from "../assets/4home-transformed.jpeg"
import image from "../assets/font.png"
const Home = () => {

    return (
<>
<>
         <div style={{flex:1}}>
           <div>
           <img src={image}  style={{width:"100%",height:"89vh"}}/>
           </div>
          
                  
<Outlet/>
                  
                </div>
        </>
</>
      
    )


}
export default Home;