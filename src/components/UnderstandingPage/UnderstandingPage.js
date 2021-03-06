import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class UnderstandingPage extends Component {
    clickNext = (event) => {
        this.props.dispatch({
            type: 'FEEDBACK_UNDERSTANDING',
            payload: this.state.understanding,
        })
        this.props.history.push('/support');
    }

    changeField = (event) => {
        this.setState({
            understanding: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>

                <div>
                    <input
                        type="number"
                        placeholder="Understanding"
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

export default connect(mapReduxStateToProps)(UnderstandingPage);
