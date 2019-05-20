import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class FeelingPage extends Component {
    clickNext = (event) => {
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <div>
                    CONTENT
                    <button onClick={this.clickNext}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(FeelingPage);
