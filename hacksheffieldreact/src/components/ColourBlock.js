//Contains 
import React, { Component } from 'react'

export class ColourBlock extends Component {

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
    onChange = (e) => {
        this.props.changeColour(this.props.colour.id, e.target.value);
    }

    render() {
        return (    
            <div style={this.getstyle()}>
                <form>
                <input style={this.getinputstyle()}
                type='color'
                name='colour'
                value={this.props.colour.colour}
                onChange={this.onChange}
                />
                </form>
            </div>
        )
    }
}
export default ColourBlock;