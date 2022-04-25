import React from 'react';
import ReactDOM from 'react-dom/client';
//import SeasonDisplay from './SeasonDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));


class App extends React.Component {
    constructor(props) {
        super(props);
        
        //initialize with a property of the obj w state obj. This is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            //add in success callback argument
            position => {
                //call setState to update state
                this.setState({ lat: position.coords.latitude })
            },
            //then enter in a failure callback argument
            (err) => {
                this.setState( { errorMessage: err.message })
            }
        );
    }
    //render is required by react
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading</div>
       
    }
}

root.render(<App />)