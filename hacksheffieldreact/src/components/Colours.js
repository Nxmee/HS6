//handles all the UI regarding colours, contains the colour states
import React, {Component} from 'react';
import ColourBox from './ColourBox';
//let scraper =  require('../website-scraper')

class Colours extends Component {

    //TODO: Hey chris you have to get the scraper to load in to this file
    //Once loaded the method below will return the colours state in the format you need it in
    
    //I did try but it threw errors as it didint like that it wasnt in the SRC folder.

    // Good luck have fun :D
    
    //loadsite = (url) => scraper.basicScrape(url,10,function(res){
    //    this.setState({colours: res["chrisColours"]});
    //HERE IS YOUR MOTHER FUCKING OBJECT NOW MAKE IT WORK

    //})

    render() {
        return this.props.colours.map((colourmap) => (
            <ColourBox 
            key={colourmap.id} 
            colour={colourmap} 
            changeColour={this.props.changeColour}
            delColour={this.props.delColour} 
            style={{flex:'0 1 auto', flexWrap: 'wrap'}} />
            ));
    }
}

export default Colours