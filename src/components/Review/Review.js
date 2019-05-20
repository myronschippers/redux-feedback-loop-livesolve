import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class Review extends Component {
    submitFeedback = (event) => {
        console.log('Feedback has been submitted');
    }

    render() {
        return (
            <div>
                <h2>Review Feedback</h2>
                
                <p>Feelings: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                <p>Comments: {this.props.reduxState.comments}</p>

                <button disabled={true} onClick={this.submitFeedback}>INCOMPLETE</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Review);
