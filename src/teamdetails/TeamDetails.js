import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const location = useParams();
  console.log(location);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json`)
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error(error));
  }, []);

 
  const details = async () => {
    try {
      const userDetails = await fetch(
        "https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json"
      );

      const newData = await userDetails.json();
      console.log("new Data ", newData);
      setTeamMembers(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTeamMembersByLocation = () => {

    switch (location.id) {

      case "frontend":
        return teamMembers.slice(0, 6);
      case "backend":
        return teamMembers.slice(7, 12);
      case "design":
        return teamMembers.slice(13, 18);
      case "testing":
        return teamMembers.slice(19, 24);
      case "marketing":
        return teamMembers.slice(25, 30);
      case "cloud":
        return teamMembers.slice(31, 36);
      default:

        return [];

    }

  };

  return (
    <div>
      {getTeamMembersByLocation().map((item) => (
        <>
          <h2>username: {item.username}</h2>
          <p>email: {item.email}</p>
          <p>gender: {item.gender}</p>
          <p>hiredOn: {item.hiredOn}</p>
          <p>dob: {item.dob}</p>
          <p>ssn: {item.ssn}</p>
        </>
      ))}
    </div>
  );

};

export default TeamDetails;

