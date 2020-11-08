//handled by React
import React, {Component} from 'react';
import Colours from './components/Colours';
import SelectSite from './components/SelectSite';
import Export from './components/Export';
import Header from './components/layout/header';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export class App extends Component {
  state={
    colours: [{"id":uuidv4(),"location":"mark","colour":"#ff0"},
    {"id":uuidv4(),"location":"a.bg-success:hover,a.bg-success:focus","colour":"#c1e2b3"},
    {"id":uuidv4(),"location":"a.bg-info:hover,a.bg-info:focus","colour":"#afd9ee"},
    {"id":uuidv4(),"location":"a.bg-warning:hover,a.bg-warning:focus","colour":"#f7ecb5"},
    {"id":uuidv4(),"location":"a.bg-danger:hover,a.bg-danger:focus","colour":"#e4b9b9"}]
  }

  exportCSS = () => {
    //add code to export CSS here
    console.log('exporting CSS')
  }

  changeColour = (id, colour) => {
    this.setState({colours: this.state.colours.map((iteratecolour) => {
        console.log(iteratecolour.id)
        if(iteratecolour.id === id) {
            iteratecolour.colour = colour;
        }
        return iteratecolour
    }) })
    }

  setColours(gThis, newColours){
    gThis.setState({colours: newColours});//colour =  newColours;
    console.log("State Changed requested!");
    gThis.forceUpdate();
}

  delColour = (id) => {
    this.setState({colours: [...this.state.colours.filter(colour => colour.id !== id)]
    });
  }

  render() {
    return (
    //where things go for the page  
      <div className="App">
        <div className="container">
          <Header/>
          <SelectSite setColours={this.setColours}/>
          <Export exportCSS={this.exportCSS}/>
          <div className="Colours" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            <Colours colours={this.state.colours} delColour={this.delColour} changeColour={this.changeColour}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
