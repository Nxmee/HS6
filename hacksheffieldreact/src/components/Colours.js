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
        this.setState({colours: this.state.colours.map((iteratecolour) => {
            console.log(iteratecolour.id)
            if(iteratecolour.id === id) {
                iteratecolour.colour = colour;
            }
            return iteratecolour
        }) })
    }

    render() {
        console.log(this.state.colours);
        return this.state.colours.map((colourmap) => (
            <ColourBox key={colourmap.id} colour={colourmap} changeColour={this.changeColour}/>
            ));
    }
}

export default Colours