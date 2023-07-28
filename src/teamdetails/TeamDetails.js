import React from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const API_URL = 'https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json';

const TeamDetails = () => {
  const [employees, setEmployees] = React.useState([]);

  React.useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h2">
        Team Details
      </Typography>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TeamDetails;