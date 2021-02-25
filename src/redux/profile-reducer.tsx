
import {ActionsType, AddPostType, NewPostType, postType, profilePageType} from "../typeAll";

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likeCounts: 11},
        {id: 2, message: 'It\'s my first post', likeCounts: 12},
        {id: 3, message: 'salam', likeCounts: 12},
    ],
    newPostText: ''
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

const NEW_POST_TEXT = 'NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'


export const addPostCreate = (): AddPostType => ({type: ADD_POST})
export const newPostCreate = (text: string): NewPostType => ({type: NEW_POST_TEXT, newText: text})

export default profileReducer