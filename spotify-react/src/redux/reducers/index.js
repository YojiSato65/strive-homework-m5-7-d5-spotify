import { ADD_TO_LIKED, SET_SELECTED_SONG} from '../actions'
import { initialState } from '../store'


const mainReducer = (state=initialState, action) => {
    switch(action.payload) {
        case ADD_TO_LIKED:
            return {
               ...state,
               songs: {
                   ...state.songs,
                   liked: [...state.songs.liked, action.payload]
               }
            }


            case SET_SELECTED_SONG:
                return {
                    ...state,
                    selectedSong: {
                        selected: action.payload
                    }
                }

                
            default: return state
    }
}


export default mainReducer