const feeling = (state = '', action) => {
    if (action.type === 'FEEDBACK_FEELING') {
        return action.payload;
    }
    return state;
}

export default feeling;
