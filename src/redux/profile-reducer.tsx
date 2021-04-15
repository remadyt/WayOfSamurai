
import {ActionsType, AddPostType, NewPostType, postType,} from "../typeAll";

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likeCounts: 11},
        {id: 2, message: 'It\'s my first post', likeCounts: 12},
        {id: 3, message: 'salam', likeCounts: 12},
    ] as Array<postType>,
    newPostText: ''
}



export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts,{id: new Date().getTime(), message: state.newPostText, likeCounts: 0,}]
            }
        case NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return stateCopy
    }

}

const NEW_POST_TEXT = 'NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'


export const addPost = (): AddPostType => ({type: ADD_POST})
export const newPost = (text: string): NewPostType => ({type: NEW_POST_TEXT, newText: text})

export default profileReducer