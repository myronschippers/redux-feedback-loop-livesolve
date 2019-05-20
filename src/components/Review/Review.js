import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class Review extends Component {
    clickSubmitFeedback = (event) => {
        console.log('You submitted');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                    
                <p>Feeling: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                <p>Comments: {this.props.reduxState.comments}</p>

                <button disabled={true} onClick={this.clickSubmitFeedback}>Incomplete</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Review);
