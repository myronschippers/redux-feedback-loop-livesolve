import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class UnderstandingPage extends Component {
    clickNext = (event) => {
        this.props.history.push('/support');
    }

    changeRating = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>

                <div>
                    <input
                        type="number"
                        placeholder="Understanding"
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

export default connect(mapReduxStateToProps)(UnderstandingPage);
