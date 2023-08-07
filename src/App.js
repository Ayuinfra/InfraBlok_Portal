import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./home/Home";
import About from "./about/About"
import Team from "./team/Team";
import TeamDetails from "./teamdetails/TeamDetails";
import Project from "./projectdetails/ProjectDetails";
import Error404Page from "./errorpage/ErrorPage";
import Layout from "./layout/layout";

import ContactData from "./contact/ContactData";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactData />} />
          <Route path="/teamdetails/:id" element={<TeamDetails />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );

}
export default App;

 

