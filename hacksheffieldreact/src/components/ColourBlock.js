//Contains 
import React, { Component } from 'react'

export class ColourBlock extends Component {
    state = {
        colour:''
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
              padding:'5px'  
        }
    }
    onChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <div style={this.getstyle()}>
                <input style={this.getinputstyle()}
                type='text'
                name='colour'
                placeholder={this.props.colour.colour}
                value={this.state.colour}
                onchange={this.onChange}
                />
            </div>
        )
    }
}
export default ColourBlock;