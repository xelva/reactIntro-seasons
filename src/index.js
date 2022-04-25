import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));


class App extends React.Component {
    state = { lat: null, errorMessage: '' };

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
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader message="Waiting for location" />
       
    }

}

root.render(<App />)