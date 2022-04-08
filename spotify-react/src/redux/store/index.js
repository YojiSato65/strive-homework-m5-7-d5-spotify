import { createStore, applyMiddleware, compose} from "redux"
import mainReducer from "../reducers"
import thunk from "redux-thunk";


const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export const initialState =  {

      songs: {
        liked: [],
      },

    };

const configureStore = createStore(
  // 1) the main reducer of the application (or the only one)
  mainReducer,
  // 2) the initial state for your redux store
  initialState,
  // 3) an enhancer function, for extensions or middlewares
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;