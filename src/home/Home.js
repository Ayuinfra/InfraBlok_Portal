import { Link, Outlet } from "react-router-dom";
import React from "react";
import hback from "../assets/hback.jpeg"

const Home = () => {

    return (
<>
<>
         <div style={{ backgroundImage:`url(${hback})`, width:"100%" ,height:"100vh"}}>
                    <h1 style={{ color: "red" }}>InfraBlok Portal</h1>
                    <p style={{ color: "white", fontSize: "20px" }}>
                     hii
                    </p>
                    <Link to="/teamDetails" />
<Outlet/>
                  
                </div>
        </>
</>
      
    )


}
export default Home;