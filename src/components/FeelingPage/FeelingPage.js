import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class FeelingPage extends Component {
    clickNext = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_FEELING',
            payload: this.state.feeling,
        });
        this.props.history.push('/understanding');
    }

    changeRating = (event) => {
        this.setState({
            feeling: event.target.value,
        })
    }

    submitFeedback = (event) => {
        console.log('Feedback has been submitted');
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <div>
                    <input
                        type="number"
                        placeholder="Feeling"
                        onChange={this.changeRating}
                    />
                    <button onClick={this.clickNext}>NEXT</button>
                </div>
                <div>
                    <h2>Review Feedback</h2>
                    
                    <p>Feelings: {this.props.reduxState.feelings}</p>
                    <p>Understanding: {this.props.reduxState.understanding}</p>
                    <p>Support: {this.props.reduxState.support}</p>
                    <p>Comments: {this.props.reduxState.comments}</p>

                    <button disabled={true} onClick={this.submitFeedback}>INCOMPLETE</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(FeelingPage);
