import {ProfileType} from "./components/Profile/ProfileContainer";
import {DataType, setAuthUserData} from "./redux/auth-reducer";

export type ActionsType = AddPostType
    | NewPostType
    | sendMessageType
    | updateNewMessageType
    | FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPageType
    | setTotalCountType
    | toggleIsFetchingType
    | setUserProfileType
    | SetUserDataType

export type StoreType = {
    getState: () => RootStateType
    _state: RootStateType
    _rerenderEntireTree: () => void
    dispatch: (action: ActionsType) => void
    subscribe: (observer: () => void) => void
}
export type dialogsPage = {
    id: number
    name: string

}
export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    photos: {
        small: null,
        large: string
    },
    status: null,
}
export type messageType = {
    id: number
    message: string
}

export type profilePageType = {
    posts: postType[]
    newPostText: string
}
export type dialogsPageType = {
    messages: messageType[]
    dialogs: dialogsPage[]
    newMessageBody: string
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type AddPostType = {
    type: 'ADD-POST'
}
export type NewPostType = {
    type: 'NEW-POST-TEXT'
    newText: string
}

export type FollowType = {
    type: 'FOLLOW',
    userId: number
}
export type UnFollowType = {
    type: 'UNFOLLOW',
    userId: number
}
export type SetUsersType = {
    type: 'SET_USERS',
    users: UserType[]
}
export type toggleIsFetchingType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

export type SetCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

export type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}

export type SetUserDataType = ReturnType<typeof setAuthUserData>
export type setTotalCountType = {
    type:'SET_TOTAL_COUNT'
    totalCount: number
}
export type postType = {
    id: number
    message: string
    likeCounts: number
}

export type sendMessageType = {
    type: 'SEND-MESSAGE'
}
export type updateNewMessageType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}