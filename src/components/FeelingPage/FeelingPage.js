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

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <div>
                    <input
                        type="number"
                        placeholder="Feeling"
                        onChange={this.changeField}
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

export default connect(mapReduxStateToProps)(FeelingPage);
