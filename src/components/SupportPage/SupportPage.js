import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class SupportPage extends Component {
    clickNext = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_SUPPORT',
            payload: this.state.support,
        });
        this.props.history.push('/comments');
    }

    changeRating = (event) => {
        this.setState({
            support: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <div>
                    <input
                        type="number"
                        placeholder="Support"
                        onChange={this.changeRating}
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

export default connect(mapReduxStateToProps)(SupportPage);
