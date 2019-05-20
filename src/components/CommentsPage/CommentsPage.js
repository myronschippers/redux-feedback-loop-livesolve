import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../redux/mapReduxStateToProps';

class CommentsPage extends Component {
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>

                <div>
                    CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(CommentsPage);
