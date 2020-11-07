//handles all the UI regarding colours, contains the colour states
import React, {Component} from 'react';
import ColourBox from './ColourBox';


class Colours extends Component {
    state={
        colours: [
            {
                id: 0,
                location: 'main',
                colour: '#FF0F00'
            },
            {
                id: 1,
                location: 'user',
                colour: '#10FF00'
            },
            {
                id: 2,
                location: 'footer',
                colour: '#FFFF00'
            },
        ]
    }
    changeColour = (id, colour) => {
        console.log(colour)
        this.setState({colours: this.state.colours.map(colour => {
            if(colour.id === id) {
                colour.colour = colour;
            }
        }) })
    }

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
            {this.state.colours.map((colour) => (
        <ColourBox key={colour.id} colour={colour} changeColour={this.changeColour}/>
        ))}
        </div>
        
        )
    }
}

export default Colours