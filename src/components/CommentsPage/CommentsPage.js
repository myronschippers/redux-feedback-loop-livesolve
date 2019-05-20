import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class CommentsPage extends Component {
    clickNext = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_COMMENTS',
            payload: this.state.comments,
        });
        // this.props.history.push('/confirmation');
    }

    changeComments = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>

                <div>
                    <input
                        type="text"
                        placeholder="Comments"
                        onChange={this.changeComments}
                    />
                    <button onClick={this.clickNext}>NEXT</button>
                </div>
                <div>
                    <Review />
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(CommentsPage);
