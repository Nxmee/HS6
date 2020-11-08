import React, { Component } from 'react'

export class Export extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.exportCSS.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="submit" 
                value="Export"
                className="btn"
                style={{flex: '1'}}
                />
            </form>

        )
    }
}

export default Export
