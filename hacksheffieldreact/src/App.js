//handled by React
import React from 'react';
import Colours from './components/Colours';
import './App.css';

function App() {
  return (
    //where things go for the page  
    <div className="App" style={{display: 'flex', alignItems: 'center'}}>
      <Colours/>
    </div>
  );
}

export default App;
