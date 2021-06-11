import { combineReducers } from 'redux'
import helpTipsReducer from './helpAndTips'
import testimoniReducer from './testimoni'

const rootReducer = combineReducers({
    helpTips: helpTipsReducer,
    testimoni: testimoniReducer
})

export default rootReducer