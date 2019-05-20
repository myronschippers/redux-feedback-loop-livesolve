import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class UnderstandingPage extends Component {
    clickNext = (event) => {
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>

                <div>
                    CONTENT
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
