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

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
            {this.state.colours.map((colour) => (
        <ColourBox key={colour.id} colour={colour} />
        ))}
        </div>
        
        )
    }
}

export default Colours