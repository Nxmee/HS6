//Contains 
import React, { Component } from 'react'

export class ColourBlock extends Component {
    state = {
        colour:'#FFFFFF'
    }

    getstyle = () => {
        return {
            backgroundColor: this.props.colour.colour,
            width:'50%',
            height:'100%',
            border: '3px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    getinputstyle = () => {
        return {
              padding:'5px', 
              border: 'none'
        }
    }
    onChange = (e) => this.setState({colour: e.target.value});

    render() {
        return (    
            <div style={this.getstyle()}>
                <input style={this.getinputstyle()}
                type='color'
                name='colour'
                value={this.state.colour}
                onChange={this.onChange}
                />
            </div>
        )
    }
}
export default ColourBlock;