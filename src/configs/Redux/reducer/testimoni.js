const initialState = {
    testimoni: [],
}

const testimoniReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST_TESTIMONI':
            return {
                ...state,
                testimoni: action.payload
            }
        default:
            return state
    }
}

export default testimoniReducer