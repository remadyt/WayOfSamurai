import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {userReducer} from "./user-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: userReducer
})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store