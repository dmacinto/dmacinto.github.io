import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Welcome = () => {

    return (
        <div className="container">
            <h1>
            Hello World! Welcome to the Rails 7!
            </h1>

            <p className="lead">
            This is a basic Rails 7 application using React.js.
            </p>
        </div>
        );
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Welcome />,
        document.getElementById('welcome')
    )
});

export default Welcome;