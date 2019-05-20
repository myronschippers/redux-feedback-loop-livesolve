const feeling = (state = '', action) => {
    if (action.type === 'FEEDBACK_FEELING') {
        return action.payload;
    } else if (action.type === 'FEEDBACK_CLEAR') {
        return '';
    }

    return state;
}

export default feeling;
