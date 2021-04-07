import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "../typeAll";

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likeCounts: 11},
                {id: 2, message: 'It\'s my first post', likeCounts: 12},
                {id: 3, message: 'salam', likeCounts: 12},
            ],
            newPostText: ''
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'How are you?'},
                {id: 1, message: 'How old are you'},
                {id: 1, message: 'Where are you from?'},
            ],
            dialogs: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Maxim'},
                {id: 3, name: 'Kirill'},
            ],
            newMessageBody: ''
        },

    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()

    },

}



export default store

