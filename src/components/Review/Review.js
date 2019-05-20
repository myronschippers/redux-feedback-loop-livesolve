import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class Review extends Component {
    submitFeedback = (event) => {
        console.log('Feedback has been submitted');
    }

    render() {
        let isBtnDisabled = true;
        let btnText = 'INCOMPLETE';

        if (this.props.reduxState.feeling
            && this.props.reduxState.understanding
            && this.props.reduxState.support
            && this.props.reduxState.comments
        ) {
            isBtnDisabled = false;
            btnText = 'SUBMIT';
        }

        return (
            <div>
                <h2>Review Feedback</h2>
                
                <p>Feelings: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                <p>Comments: {this.props.reduxState.comments}</p>

                <button
                    disabled={isBtnDisabled}
                    onClick={this.submitFeedback}
                >
                    {btnText}
                </button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Review);
