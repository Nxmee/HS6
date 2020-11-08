//handled by React
import React from 'react';
import Colours from './components/Colours';
import Header from './components/layout/header';
import './App.css';

function App() {
  return (
    //where things go for the page  
    <div className="App">
      <Header/>
      <div className="Colours" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <Colours/>
      </div>
    </div>
  );
}

export default App;
