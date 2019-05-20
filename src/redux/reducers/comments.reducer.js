const comments = (state = '', action) => {
    if (action.type === 'FEEDBACK_COMMENTS') {
        return action.payload;
    }
    return state;
}

export default comments;
