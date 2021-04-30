import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: userReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export default store