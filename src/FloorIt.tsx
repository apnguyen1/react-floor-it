import React, { useState } from 'react';
import { Views } from './Components/Views/views.ts';
import Home from './Components/Views/Home/Home.tsx';
import Box from '@mui/material/Box';

const FloorIt : React.FC = () => {
  const [view, setView] = useState<Views>("Home");

  const renderView = () => {
    switch (view) {
      case "Home":
        return <Home setView={setView}/>
      default:
        return <Home setView={setView}/>
    }
  }

  return (
    <Box >
      {renderView()}
    </Box>
  )
}

export default FloorIt;