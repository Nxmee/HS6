//Represents a box representing a whole colour instance
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ColourBlock from './ColourBlock';

export class ColourBox extends Component {
    getouterstyle = () => {
        return {
            backgroundColor: '#222222', 
            display: 'flex',
            flexDirection: 'row',
            height:'20vh',
            width: '50%',
            margin: 'auto',
            justifyContent: 'flex-start',
            alignContent: 'stretch',
            alignItems: 'center',
            flex: '0 1 auto',
            flexBasis: '100%',
            color:'#FFFFFF',
            textAlign: 'center',
        }
    }
    getinnerstyle = () => {
        return {
            backgroundColor: '#222222', 
            height:'20vh',
            width: '50%',
            margin: 'auto',
            color:'#FFFFFF',
            textAlign: 'center',
            flex: '0 1 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    render() {
        return (
            <div style={this.getouterstyle()}>
                <ColourBlock colour={this.props.colour} changeColour={this.props.changeColour}/>
                <div style={this.getinnerstyle()}>
                    <p>{this.props.colour.location}</p>
                </div>
                <button onClick={this.props.delColour.bind(this, this.props.colour.id)} style={btnstyle}>x</button>
            </div>

        )
    }
}

//PropTypes 
ColourBox.propTypes = {
    colour: PropTypes.object.isRequired
}

const btnstyle = {
    background: '#333333',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    flex: '0 1 auto'

}

export default ColourBox;
