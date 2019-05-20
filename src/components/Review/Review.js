import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Review extends Component {
    submitFeedback = (event) => {
        const severData = {
            feeling: this.props.reduxState.feeling,
            understanding: this.props.reduxState.understanding,
            support: this.props.reduxState.support,
            comments: this.props.reduxState.comments,
        };
        axios.post('/feedback', severData)
            .then((response) => {
                this.props.dispatch({
                    type: 'FEEDBACK_CLEAR',
                })
                this.props.history.push('/confirmation');
            })
            .catch((err) => {
                console.log(err);
            });
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

export default withRouter(connect(mapReduxStateToProps)(Review));
