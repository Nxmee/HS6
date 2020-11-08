//handles all the UI regarding colours, contains the colour states
import React, {Component} from 'react';
import ColourBox from './ColourBox';
let scraper =  require('../website-scraper')

class Colours extends Component {
    state={
        colours: [
            {
                id: 0,
                location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut mi at tellus mattis laoreet. Integer ut elementum ipsum. Curabitur pulvinar sagittis faucibus. Phasellus accumsan imperdiet odio. Mauris a mauris ante. Donec interdum pretium porta. Proin fermentum eu leo at accumsan.',
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

    //TODO: Hey chris you have to get the scraper to load in to this file
    //Once loaded the method below will return the colours state in the format you need it in
    
    //I did try but it threw errors as it didint like that it wasnt in the SRC folder.

    // Good luck have fun :D
    
    loadsite = (url) => scraper.basicScrape(url,10,function(res){
        this.setState({colours: res["chrisColours"]});
    //HERE IS YOUR MOTHER FUCKING OBJECT NOW MAKE IT WORK

    })
    changeColour = (id, colour) => {
        this.setState({colours: this.state.colours.map((iteratecolour) => {
            console.log(iteratecolour.id)
            if(iteratecolour.id === id) {
                iteratecolour.colour = colour;
            }
            return iteratecolour
        }) })
    }

    delColour = (id) => {
        this.setState({colours: [...this.state.colours.filter(colour => colour.id !== id)]
        });
    }

    render() {
        return this.state.colours.map((colourmap) => (
            <ColourBox key={colourmap.id} colour={colourmap} changeColour={this.changeColour}
            delColour={this.delColour} style={{flex:'0 1 auto'}} />
            ));
    }
}

export default Colours