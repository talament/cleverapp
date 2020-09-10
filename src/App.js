import React from 'react';
import Button from './Button';
import MuiButton from '@material-ui/core/Button';
import Tooltip from './Tooltip';
import ProgressBar from './ProgressBar';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Buttons</h2>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" disabled>Disabled</Button>
        <h2>Tooltip</h2>
        <Tooltip title="Save your work!"><MuiButton variant="contained" color="primary" endIcon={<SaveIcon />}>Save</MuiButton></Tooltip>
        <h2>Progress Bar</h2>
        <div style={{width:'50vw'}}>
          <ProgressBar color="secondary" variant="determinate" value="50" />
        </div>
      </header>
    </div>
  );
}

export default App;
