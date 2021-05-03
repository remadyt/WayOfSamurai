import {ActionsType, AddPostType, NewPostType, postType, SetStatusType, setUserProfileType,} from "../typeAll";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {ProfileApi, UserApi} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likeCounts: 11},
        {id: 2, message: 'It\'s my first post', likeCounts: 12},
        {id: 3, message: 'salam', likeCounts: 12},
    ] as Array<postType>,
    newPostText: '',
    profile: {} as ProfileType,
    status: ''
}


export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: new Date().getTime(), message: state.newPostText, likeCounts: 0,}]
            }
        case NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return stateCopy
    }

}

const NEW_POST_TEXT = 'NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })

    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getUserStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })

    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        ProfileApi.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

    }
}

export const addPost = (): AddPostType => ({type: ADD_POST})
export const newPost = (text: string): NewPostType => ({type: NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})

export default profileReducer