import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class ConfirmationPage extends Component {
    clickNewFeedback = (event) => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!</h2>

                <div>
                    CONTENT
                    <button onClick={this.clickNewFeedback}>Leave New Feedback</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(ConfirmationPage);
