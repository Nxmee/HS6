import React, { Component } from 'react'

export class SelectSite extends Component {
    state= {
        website: ''
    }
    // var gThis = this;
    onSubmit = (e) => {
        var gThis = this;
        e.preventDefault();
        
        //insert website loading code here using this.state.website as the URL
         
        //when you have the colours object call:
        fetch("/colours.json?url="+btoa(this.state.website)).then(res => {
            return res.json();
        }).then(t => {
            console.log(t.colours);
            gThis.props.setColours(gThis,t.colours);
        });
        console.log(this.props);
        //this.props.setColours.bind(this, colours)
        console.log("LOCATION: "+document.location.href);
        console.log("URL: "+this.state.website);
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
