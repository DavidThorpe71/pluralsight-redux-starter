import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>React Redux in ES6</p>
                <Link to="about" className="btn btn-primary btn-lg">Learbn Nore</Link>
            </div>
        );
    }
}


export default HomePage;