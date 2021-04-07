

export type ActionsType = AddPostType
    | NewPostType
    | sendMessageType
    | updateNewMessageBody
    | FollowType
    | UnFollowType
    | SetUsersType

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
    fullName: string,
    photoUrl: string ,
    status: string,
    location: {
        city: string,
        country: string
    }
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
    type:'FOLLOW',
    userId: number
}
export type UnFollowType = {
    type:'UNFOLLOW',
    userId: number
}
export type SetUsersType = {
    type:'SET_USERS',
    users:any
}

export type postType = {
    id: number
    message: string
    likeCounts: number
}

export type sendMessageType ={
    type:'SEND-MESSAGE'
}
export type updateNewMessageBody = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body:string
}