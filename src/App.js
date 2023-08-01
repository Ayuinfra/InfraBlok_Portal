import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./home/Home";
import About from "./about/About"
import Team from "./team/Team";
import TeamDetails from "./teamdetails/TeamDetails";
import Project from "./project/Project";
import Error404Page from "./errorpage/ErrorPage";
import Layout from "./layout/layout";
import Contact from "./contact/Contact";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teamdetails/:id" element={<TeamDetails />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );

}
export default App;

 

