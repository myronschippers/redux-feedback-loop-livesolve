import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class SupportPage extends Component {
    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <div>
                    CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(SupportPage);
