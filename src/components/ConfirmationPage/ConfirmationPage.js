import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class ConfirmationPage extends Component {
    render() {
        return (
            <div>
                <h2>Thank You!</h2>

                <div>
                    CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(ConfirmationPage);
