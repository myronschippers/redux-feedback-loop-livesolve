import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class Review extends Component {
    clickSubmitFeedback = (event) => {
        const serverData = {
            feeling: this.props.reduxState.feeling,
            understanding: this.props.reduxState.understanding,
            support: this.props.reduxState.support,
            comments: this.props.reduxState.comments,
        };
        Axios.post('/feedback', serverData)
            .then((response) => {
                this.props.history.push('/confirmation');
            });
        console.log('You submitted');
    }

    render() {
        let isSubmitDisabled = true;
        let submitText = 'Incomplete';
        if (this.props.reduxState.feeling
            && this.props.reduxState.understanding
            && this.props.reduxState.support
            && this.props.reduxState.comments
        ) {
            isSubmitDisabled = false;
            submitText = 'SUBMIT';
        }
    
        return (
            <div>
                <h2>Review Your Feedback</h2>
                    
                <p>Feeling: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                <p>Comments: {this.props.reduxState.comments}</p>

                <button disabled={isSubmitDisabled} onClick={this.clickSubmitFeedback}>{submitText}</button>
            </div>
        );
    }
}

export default withRouter(connect(mapReduxStateToProps)(Review));
