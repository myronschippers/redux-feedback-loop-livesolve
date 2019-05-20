import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class FeelingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feeling: '',
        }
    }

    clickNext = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_FEELING',
            payload: this.state.feeling,
        })
        this.props.history.push('/understanding');
    }

    changeField = (event) => {
        this.setState({
            feeling: event.target.value,
        });
    }

    clickDecrease = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_FEELING_DECREASE',
        })
    }

    clickIncrease = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_FEELING_INCREASE',
        })
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <div>
                    <button onClick={this.clickDecrease}>-</button>
                    {this.props.reduxState.feeling}
                    <button onClick={this.clickIncrease}>+</button>
                    <br />
                    <button onClick={this.clickNext}>NEXT</button>
                </div>
                <div>
                    <Review />
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(FeelingPage);
