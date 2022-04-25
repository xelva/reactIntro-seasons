import React from 'react';
import './utils.css';

const Loader = (props) => {
    return (
        <div className="ui segment spinner">
            <p></p>
            <div className="ui active dimmer">
                <div className="ui big text loader">{props.message}</div>
            </div>
           
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;