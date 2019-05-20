import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class HomePage extends Component {
    clickGetStarted = (event) => {
        this.props.history.push('/feeling');
    }

    render() {
        return (
            <div>
                <h2>Daily Feedback</h2>

                <div>
                    <button onClick={this.clickGetStarted}>GET STARTED</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(HomePage);
