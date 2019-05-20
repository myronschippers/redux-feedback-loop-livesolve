const comments = (state = '', action) => {
    if (action.type === 'FEEDBACK_COMMENTS') {
        return action.payload;
    } else if (action.type === 'FEEDBACK_CLEAR') {
        return '';
    }

    return state;
}

export default comments;
