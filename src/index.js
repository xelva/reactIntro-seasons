import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        //add in success callback argument
        (position) => console.log(position),
        //then enter in a failure callback argument
        (err) => console.log(err)
    );
    return (
        <SeasonDisplay />
    )
}



root.render(<App />)