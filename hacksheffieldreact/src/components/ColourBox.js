import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ColourBox extends Component {
    getstyle = () => {
        return {
            backgroundColor: this.props.colour.colour, 
            display: 'flex',
            flexDirection: 'row',
            padding:'10vh', 
            justifyContent: 'flex-start',
            alignContent: 'stretch',
            alignItems: 'flex-start',
            flex: '0 1 auto',
            flexBasis: '100%'
        }
    }

    render() {
        return (
            <div style={this.getstyle()}>
                <p>{this.props.colour.location}</p>
            </div>
        )
    }
}

//PropTypes 
ColourBox.propTypes = {
    colour: PropTypes.object.isRequired
}

export default ColourBox;
