import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';
import Review from '../Review/Review';

class CommentsPage extends Component {
    clickNext = (event) => {
        this.props.history.push('/confirmation');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>

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

export default connect(mapReduxStateToProps)(CommentsPage);
