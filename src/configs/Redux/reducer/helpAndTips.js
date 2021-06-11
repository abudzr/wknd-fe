const initialState = {
    helpTips: [],
}

const helpTipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST_HELP_AND_TIPS':
            return {
                ...state,
                helpTips: action.payload
            }
        default:
            return state
    }
}

export default helpTipsReducer