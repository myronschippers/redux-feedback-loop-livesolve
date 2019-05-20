const understanding = (state = '', action) => {
    if (action.type === 'FEEDBACK_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'FEEDBACK_CLEAR') {
        return '';
    }

    return state;
}

export default understanding;
