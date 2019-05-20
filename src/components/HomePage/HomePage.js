import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Daily Feedback</h2>

                <div>
                    PAGE CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(HomePage);
