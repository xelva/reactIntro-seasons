import React from 'react';
import ReactDOM from 'react-dom/client';
//import SeasonDisplay from './SeasonDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));


class App extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };
    } */

    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        console.log('...initial component renedered to the screen')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState( { errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('...and it has been updated and rerendered')
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