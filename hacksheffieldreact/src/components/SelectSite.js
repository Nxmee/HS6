import React, { Component } from 'react'

export class SelectSite extends Component {
    state= {
        website: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        //insert website loading code here using this.state.website as the URL

        //when you have the colours object call:
        //this.props.setColours.bind(this, colours)
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                name="website" 
                style={{flex: '10', padding:'5px'}}
                placeholder="load Website..."
                value={this.state.website}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>

        )
    }
}

export default SelectSite
