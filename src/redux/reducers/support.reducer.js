const support = (state = '', action) => {
    if (action.type === 'FEEDBACK_SUPPORT') {
        return action.payload;
    } else if (action.type === 'FEEDBACK_CLEAR') {
        return '';
    }

    return state;
}

export default support;
