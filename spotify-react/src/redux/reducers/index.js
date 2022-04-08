import { ADD_TO_LIKED} from '../actions'
import { initialState } from '../store'


const mainReducer = (state=initialState, action) => {
    switch(action.payload) {
        case ADD_TO_LIKED:
            return {
               
            }

            default: return state
    }
}


export default mainReducer