import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class FeelingPage extends Component {
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <div>
                    CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(FeelingPage);
