import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class SupportPage extends Component {
    clickNext = (event) => {
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <div>
                    PAGE CONTENT
                    <button onClick={this.clickNext}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(SupportPage);
