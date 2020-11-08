//handled by React
import React from 'react';
import Colours from './components/Colours';
import SelectSite from './components/SelectSite';
import Header from './components/layout/header';
import './App.css';

function App() {
  return (
    //where things go for the page  
    <div className="App">
      <div className="container">
        <Header/>
        <SelectSite/>
        <div className="Colours" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
          <Colours/>
        </div>
      </div>
    </div>
  );
}

export default App;
