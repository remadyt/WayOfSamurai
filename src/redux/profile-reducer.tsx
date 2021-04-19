
import {ActionsType, AddPostType, NewPostType, postType, setUserProfileType,} from "../typeAll";
import {ProfileType} from "../components/Profile/ProfileContainer";

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likeCounts: 11},
        {id: 2, message: 'It\'s my first post', likeCounts: 12},
        {id: 3, message: 'salam', likeCounts: 12},
    ] as Array<postType>,
    newPostText: '',
    profile: {} as ProfileType
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return stateCopy
    }

}

const NEW_POST_TEXT = 'NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


export const addPost = (): AddPostType => ({type: ADD_POST})
export const newPost = (text: string): NewPostType => ({type: NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: ProfileType):setUserProfileType  => ({type:SET_USER_PROFILE, profile})

export default profileReducer