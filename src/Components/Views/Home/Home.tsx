import React from 'react';
import Box from '@mui/material/Box';
import './Home.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { appName } from '../../../utils/constants.ts';
import { Views } from '../views.ts';

interface HomeProps {
  setView: (view: Views) => void;
}

const Home: React.FC<HomeProps> = ({setView}) => {
  return (
    <Box className="home-container">
      <Typography variant="h3" component="div">
        {appName}
      </Typography>
      <Button variant="contained" color="primary" size={"large"} onClick={() => setView("Home")}>
        Duel! (2 players)
      </Button>
    </Box>
  );
};

export default Home;
