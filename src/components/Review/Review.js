import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class Review extends Component {
    clickSubmitFeedback = (event) => {
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

export default connect(mapReduxStateToProps)(Review);
