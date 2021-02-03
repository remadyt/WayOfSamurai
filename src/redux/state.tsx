

type dialogsPage = {
    id: number
    name: string
}
type messageType = {
    id:number
    message: string
    likeCounts: number
}
type postType = {
    id:number
    message: string
    likeCounts: number
}
type profilePageType = {
        posts: postType[]
}
type dialogsPageType = {
    messages: messageType[]
    dialogs: dialogsPage[]
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likeCounts: 11},
            {id: 2, message: 'It\'s my first post', likeCounts: 12},
            {id: 3, message: 'salam',likeCounts: 12},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'How are you?', likeCounts: 12},
            {id: 1, message: 'How old are you', likeCounts: 12},
            {id: 1, message: 'Where are you from?', likeCounts: 12},
        ],
        dialogs: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Maxim'},
            {id: 3, name: 'Kirill'},
        ],
    },

}

export default state