import React from 'react';
import Home from './pages/Home/Home';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Home />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
