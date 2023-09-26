import { combineReducers, legacy_createStore } from "redux";
import { filmsReducer } from "./reducers/filmReducer";
import { userReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
    filmsReducer: filmsReducer,
    userReducer: userReducer,
})

export const store = legacy_createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);